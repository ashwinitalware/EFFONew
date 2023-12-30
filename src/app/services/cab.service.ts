import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import qs from 'qs';
@Injectable({
  providedIn: 'root',
})
export class CabService {
  selectedCabId;
  distance = 0;
  baseFare = 0;
  tax = 0;
  total = 0;
  from;
  to;
  fromLatLngObject;
  toLatLngObject;
  type = 'local';
  selectedCityId = '1';
  // selectedCityId
  // selectedCity
  selectedCity = 'pune';
  selectedCityObj = {
    lat: '18.518509',
    lng: '73.861295',
  };
  historyRides = [];
  // fareObject = {
  //   km: 0,
  //   fare: 0,
  //   taxAndFees: 0,
  //   total: 0,
  // };
  apiKey = 'AIzaSyC1Cz13aBYAbBYJL0oABZ8KZnd7imiWwA4';

  cities = [];
  cabTypes = [];
  driverInterval;
  constructor(public dataService: DataService) { }

  getCities() {
    this.dataService._get('cab-cities', '').subscribe((data) => {
      this.cities = data.data;
    });
  }

  getCabTypes() {
    this.dataService._get('cab-types', 'populate=*').subscribe((data) => {
      this.cabTypes = data.data;
    });
  }
  getHistoryRides() {
    let params = qs.stringify({
      filters: {
        user: this.dataService.profile.id,
      },
      sort: {
        id: 'desc',
      },
    });

    this.dataService._get('cab-rides', params).subscribe((data) => {
      this.historyRides = data.data;
    });
  }
}
