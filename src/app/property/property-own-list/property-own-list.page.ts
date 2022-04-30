import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import qs from "qs";
@Component({
  selector: 'app-property-own-list',
  templateUrl: './property-own-list.page.html',
  styleUrls: ['./property-own-list.page.scss'],
})
export class PropertyOwnListPage implements OnInit {
data=[]
  constructor(public http:HttpClient,public dataService:DataService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {    this.getMyProperties()}


  getMyProperties(){

    let query=qs.stringify({
      populate:'*',
      filters:{
        user:{
          id:{
            $eq:this.dataService.profile.id
          }
        }
      }
    })


    
    this.dataService._get('properties',query).subscribe(data=>{


      data.data.forEach(property => {
        try {
  

        property.attributes.imagesArray=property.attributes.images.split(',')

      } catch (error) {
        property.attributes.imagesArray=[]
      }
       
      });


 
      
      this.data=data.data
      console.log(this.data);
    })


    
    
    
  }

}
