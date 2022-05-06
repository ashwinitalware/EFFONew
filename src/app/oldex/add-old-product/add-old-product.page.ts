import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { OldExService } from 'src/app/services/old-ex.service';

@Component({
  selector: 'app-add-old-product',
  templateUrl: './add-old-product.page.html',
  styleUrls: ['./add-old-product.page.scss'],
})
export class AddOldProductPage implements OnInit {

  form:FormGroup
  fileToUpload: File | null = null;
images=[]
  id;
  constructor(public dataService:DataService,public http:HttpClient,public oldExService:OldExService,public activatedRoute:ActivatedRoute,public navCtrl:NavController) {
    this.oldExService.getCategories()

    this.form=new FormGroup({
      category:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
    })


    this.getDetails();
   }


   getDetails() {
    if (this.activatedRoute.snapshot.params.id){

      this.id=this.activatedRoute.snapshot.params.id
      this.http
      .get(
        this.dataService.apiUrl +
          'oldex-products/' +
          this.activatedRoute.snapshot.params.id,
          {
            params:{
              populate:'*'
            }
          }
      )
      .subscribe((data: any) => {
        this.id = data.data.id;
        this.form.patchValue({
          ...data.data.attributes,

          category:data.data.attributes.category.data.id+""
        });

        this.images=data.data.attributes.images.data
        console.log(this.images);
        

        data.data.attributes.images.forEach(element => {
          
        });

      });
    }
   
  }
  ngOnInit() {
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
        this.images.push(data[0])
        // this.tempImages.push(data[0].url);
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
    this.images.splice(index, 1);
    // this.tempImages.splice(index, 1);
  }
  generateImageString() {
    let i = 0;
    let tempString = '';
    // this.tempImages.forEach((imageUrl) => {
    //   if (!i++) tempString = imageUrl;
    //   else {
    //     tempString += ',' + imageUrl;
    //   }
    // });
    this.form.patchValue({
      images: tempString,
    });
    console.log('generated', this.form.value.images);
  }

  submit(){


    if(this.form.invalid)
     return this.dataService.presentToast('Form Incomplete !');

    let imagesIds=[]
    this.images.forEach(image => {
      imagesIds.push(image.id)

      
    });
    console.log(imagesIds);
    

    this.dataService.present()
    this.dataService[this.id?'_put':'_post']('oldex-products'+(this.id?'/'+this.id:''),{},{
data:{
  ...this.form.value,
  images:imagesIds
}
    })
    .subscribe(data=>{
      this.dataService.dismiss();
      this.dataService.confirmSwal('', 'Product Updated !');
      this.oldExService.getMyProducts();
      this.navCtrl.pop();
    })

  }

  remove(){
    this.dataService.present()
this.dataService._delete('oldex-products/'+this.id).subscribe(data=>{

  this.dataService.dismiss();
  this.dataService.confirmSwal('', 'Product Deleted !');

  this.oldExService.getMyProducts();
  this.navCtrl.pop();

})
  }
}
