import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.page.html',
  styleUrls: ['./job-profile.page.scss'],
})
export class JobProfilePage implements OnInit {
  id;
  educations = [];
  jobCategories = [];
  form: FormGroup;
  fileToUpload: File | null = null;

  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.form = new FormGroup({
      about: new FormControl('', Validators.required),
      experienceYears: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      university: new FormControl('', Validators.required),
      passingYear: new FormControl('', [
        Validators.required,
        Validators.min(1980),
        Validators.max(2030),
      ]),
      educationField: new FormControl('', Validators.required),
      jobCategories: new FormControl('', Validators.required),
    });

    console.log(this.form);
    this.getData();
    this.getEducations();
    this.getJobCategories();
  }
  getData() {
    this.http
      .get(this.dataService.apiUrl + 'user-job-profiles', {
        params: {
          'filters[user][id][$eq]': this.dataService.profile.id,
          populate: '*',
        },
      })
      .subscribe((data: any) => {
        if (data.data.length) {
          this.id = data.data[0].id;
          // alert(data.data[0].attributes.education.data.id);
          this.form.patchValue({
            ...data.data[0].attributes,
          });
          this.form.patchValue({
            education: data.data[0].attributes.education.data.id + '',
          });
          this.form.patchValue({
            experienceYears: data.data[0].attributes.experienceYears + '',
          });
          //prefill interested job categories
          let tempJobCategories = [];
          data.data[0].attributes.jobCategories.data.forEach((jobCategory) => {
            tempJobCategories.push(jobCategory.id + '');
          });
          this.form.patchValue({
            jobCategories: tempJobCategories,
          });
        }
        // this.educations = data.data;
      });
  }
  getEducations() {
    this.http
      .get(this.dataService.apiUrl + 'educations')
      .subscribe((data: any) => {
        this.educations = data.data;
      });
  }
  getJobCategories() {
    this.http
      .get(this.dataService.apiUrl + 'job-categories')
      .subscribe((data: any) => {
        this.jobCategories = data.data;
      });
  }

  handleFileInput(files: any) {
    this.fileToUpload = files.target.files.item(0);
    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    const formData: FormData = new FormData();
    formData.append('files', this.fileToUpload, this.fileToUpload.name);
    this.dataService.presentToast('Updating Image', 'dark', 1000);
    // this.dataService.present();
    return this.http
      .post(this.dataService.apiUrl + 'upload', formData)
      .subscribe((data: any) => {
        this.http
          .put(
            this.dataService.apiUrl + 'users/' + this.dataService.profile.id,
            {
              profileImage: data[0].url,
            }
          )
          .subscribe(
            (data2: any) => {
              // this.dataService.dismiss();
              // this.dataService.presentToast('Image Updated');
              this.dataService.saveProfileObject(data2);
              // this.dataService.profile.profileImage = data2.profileImage;
            },
            (err) => {
              // this.dataService.dismiss();
            }
          );
      });
  }
  ngOnInit() {}
  update() {
    // console.log(this.form.value);
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return this.dataService.presentToast(
        'Form Incomplete. Please provide all the details'
      );

    this.dataService.confirmSwal('', 'Profile Updated');

    // this.navCtrl.back();
    this.http[this.id ? 'put' : 'post'](
      this.dataService.apiUrl + 'user-job-profiles/' + (this.id || ''),
      {
        data: {
          user: this.dataService.profile.id + '',
          ...this.form.value,
        },
      }
    ).subscribe((data) => {});
  }
}
