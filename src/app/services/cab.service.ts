import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import qs from 'qs';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  // selectedCityId = '1';
  selectedCityObj;
  selectedCityId;
  features = [];
  featureSelected;
  // selectedCity
  // selectedCity = 'pune';
  // selectedCityObj = {
  //   lat: '18.518509',
  //   lng: '73.861295',
  // };
  historyRides = [];
  fareObject = {
    km: 0,
    fare: 0,
    taxAndFees: 0,
    total: 0,
  };
  showPrices = false;

  apiKey = 'AIzaSyD6d0aNvUiSWaENoQ1UuqCOzfMg0Wmq7Do';

  cities = [];
  cabTypes = [];
  driverInterval;
  constructor(
    public dataService: DataService,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.getCities();
  }

  getCities() {
    this.dataService._get('cab-cities', 'populate=*').subscribe((data) => {
      this.cities = data.data;
    });
  }

  getCabTypes() {
    this.cabTypes = [];

    this.dataService
      ._get(
        'cab-types',
        qs.stringify({
          filters: {
            city: {
              name: this.selectedCityObj.attributes.name,
            },
            feature: {
              name: this.featureSelected,
            },
          },
        })
      )
      .subscribe((data) => {
        this.cabTypes = data.data;
        if (this.cabTypes.length == 0) {
          this.navCtrl.pop();
          // this.router.navigate(['/dashboard']);
          return this.dataService.presentToast('Sorry, No Cab Type Found !');
        }
        this.autoSelectCabType();
      });
  }
  autoSelectCabType() {
    if (this.cabTypes.length) this.selectCabType(0);
  }
  selectCabType(index) {
    if (!this.cabTypes.length) return;
    this.selectedCabId = this.cabTypes[index].id;
    this.cabTypes.forEach((cabType) => {
      cabType.selected = false;
    });
    this.cabTypes[index].selected = true;
    // this.calculatePrices()
    // calculate Prices

    this.baseFare = this.distance * this.cabTypes[index].attributes.pricePerKm;
    if (this.baseFare < this.cabTypes[index].attributes.minimumPrice)
      this.baseFare = this.cabTypes[index].attributes.minimumPrice;
    this.tax = this.baseFare * 0.18;
    this.total = this.baseFare + this.tax;
    this.showPrices = true;
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
