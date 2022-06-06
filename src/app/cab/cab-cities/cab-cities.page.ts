import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CabService } from 'src/app/services/cab.service';

@Component({
  selector: 'app-cab-cities',
  templateUrl: './cab-cities.page.html',
  styleUrls: ['./cab-cities.page.scss'],
})
export class CabCitiesPage implements OnInit {

  constructor(public cabService:CabService,public router:Router) { 

    this.cabService.getCities()

  }

  ngOnInit() {
  }

  selected(data){
    // console.log(data);
    this.cabService.selectedCityId=data.id
    this.cabService.selectedCity=data.attributes.name
    this.cabService.selectedCityObj.lat=data.attributes.lat
    this.cabService.selectedCityObj.lng=data.attributes.lng

    this.router.navigate(['/cab-home'])
  }

}
