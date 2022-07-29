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
  fareObject = {
    km: 0,
    fare: 0,
    taxAndFees: 0,
    total: 0,
  };
  apiKey = 'AIzaSyD6d0aNvUiSWaENoQ1UuqCOzfMg0Wmq7Do';

  cities = [];
  cabTypes = [];
  driverInterval;
  constructor(public dataService: DataService) {}

  getCities() {
    this.dataService._get('cab-cities', '').subscribe((data) => {
      this.cities = data.data;
    });
  }

  getCabTypes() {
    this.dataService._get('cab-types', '').subscribe((data) => {
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