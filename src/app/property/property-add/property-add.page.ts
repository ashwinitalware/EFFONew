import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PropertyService } from 'src/app/service/property.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.page.html',
  styleUrls: ['./property-add.page.scss'],
})
export class PropertyAddPage implements OnInit {
  fileToUpload: File | null = null;

  tempImages = [];
  id;
  form: FormGroup;
  constructor(
    public propertyService: PropertyService,
    public dataService: DataService,
    public http: HttpClient,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      // propertyType: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      sellRent: new FormControl('sell', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      bedrooms: new FormControl(0),
      bathrooms: new FormControl(0),
      balconies: new FormControl(0),
      area: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      ageType: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
    });

    this.getDetails();
  }
  getDetails() {
    if (this.activatedRoute.snapshot.params.id)
      this.http
        .get(
          this.dataService.apiUrl +
          'properties/' +
          this.activatedRoute.snapshot.params.id
        )
        .subscribe((data: any) => {
          this.id = data.data.id;
          this.form.patchValue({
            ...data.data.attributes,
          });
          this.tempImages = data.data.attributes.images.split(',');
        });
  }

  ngOnInit() { }
  removeProperty() {
    this.http
      .delete(this.dataService.apiUrl + 'properties/' + (this.id || ''), {})
      .subscribe(
        (data) => {
          this.dataService.dismiss();
          this.dataService.confirmSwal('', 'Property Details Submitted !');

          this.propertyService.getMyProperties();
          this.navCtrl.pop();
        },
        (err) => {
          this.dataService.dismiss();
        }
      );
  }
  submit() {
    console.log(this.tempImages);

    this.generateImageString();
    console.log(this.form.value.images);

    console.log(this.form.value);

    if (this.form.invalid)
      return this.dataService.presentToast('Form Incomplete !');

    this.dataService.present();

    console.log(this.form.value);

    this.http[this.id ? 'put' : 'post'](
      this.dataService.apiUrl + 'properties/' + (this.id || ''),
      {
        data: {
          user: this.dataService.profile.id,

          ...this.form.value,
        },
      }
    ).subscribe(
      (data) => {
        this.dataService.dismiss();
        this.dataService.confirmSwal('', 'Property Details Submitted !');
        this.propertyService.getMyProperties();
        this.navCtrl.back();
        // this.navCtrl.pop();
      },
      (err) => {
        this.dataService.dismiss();
      }
    );
  }

  handleFileInput(files: any) {
    this.fileToUpload = files.target.files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    const formData: FormData = new FormData();
    formData.append('files', this.fileToUpload, this.fileToUpload.name);
    this.dataService.present();
    this.http.post(this.dataService.apiUrl + 'upload', formData).subscribe(
      (data: any) => {
        // data[0].url

        this.dataService.dismiss();
        this.tempImages.push(data[0].url);
        // this.generateImageString()

        // if (!this.form.value.images)
        //   this.form.patchValue({
        //     images: data[0].url
        //   })
        // else {
        //   this.form.patchValue({
        //     images: ',' + data[0].url
        //   })
        // }
      },
      (err) => {
        this.dataService.dismiss();
      }
    );
  }

  removeImage(index) {
    this.tempImages.splice(index, 1);
  }
  generateImageString() {
    let i = 0;
    let tempString = '';
    this.tempImages.forEach((imageUrl) => {
      if (!i++) tempString = imageUrl;
      else {
        tempString += ',' + imageUrl;
      }
    });
    this.form.patchValue({
      images: tempString,
    });
    console.log('generated', this.form.value.images);
  }
}
