import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  type='local'
  selectedCityId='1'
  // selectedCityId
  // selectedCity
  selectedCity='pune'
  selectedCityObj={
    lat:'18.518509',
    lng:'73.861295'
  }

  fareObject={
    km:0,
    fare:0,
    taxAndFees:0,
    total:0
  }
  apiKey = "AIzaSyD6d0aNvUiSWaENoQ1UuqCOzfMg0Wmq7Do";

cities=[]
cabTypes=[]
  constructor(public dataService:DataService) { }

  getCities(){
    this.dataService._get('cab-cities','').subscribe(data=>{
      this.cities=data.data
    })
  }

  getCabTypes(){
    this.dataService._get('cab-types','').subscribe(data=>{
      this.cabTypes=data.data
    })
  }
}
