import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {
  add = false;
  add1 = false;
  data
  constructor(public http:HttpClient,public dataService:DataService,public activatedRoute:ActivatedRoute) {
    this.getData()
  }
  getData(){
this.http.get(this.dataService.apiUrl+'service-profiles',{
  params:{
    'filters[id][$eq]':this.activatedRoute.snapshot.params.id,
    'populate':'*'
  }
}).subscribe((data:any)=>{
  if(data.data)
  this.data=data.data[0]
})

  }

  ngOnInit() {}
}
