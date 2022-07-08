import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CabService } from 'src/app/services/cab.service';
import { DataService } from 'src/app/services/data.service';
declare let google: any;
@Component({
  selector: 'app-cab-confirm-booking',
  templateUrl: './cab-confirm-booking.page.html',
  styleUrls: ['./cab-confirm-booking.page.scss'],
})
export class CabConfirmBookingPage implements OnInit {
  selectCabTypeIndex;
  showPrices = false;
  constructor(
    public dataService: DataService,
    public cabService: CabService,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.cabService.getCabTypes();
    console.log(this.cabService.fromLatLngObject.lat());
    console.log(this.cabService.toLatLngObject);
    this.calculateDistance();
  }
  selectCabType(index) {
    this.cabService.selectedCabId = this.cabService.cabTypes[index].id;
    this.cabService.cabTypes.forEach((cabType) => {
      cabType.selected = false;
    });
    this.cabService.cabTypes[index].selected = true;
    // this.calculatePrices()
    // calculate Prices

    this.cabService.baseFare =
      this.cabService.distance *
      this.cabService.cabTypes[index].attributes.pricePerKm;
    this.cabService.tax = this.cabService.baseFare * 0.18;
    this.cabService.total = this.cabService.baseFare + this.cabService.tax;
    this.showPrices = true;
  }
  calculateDistance() {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: this.cabService.fromLatLngObject,
        destination: this.cabService.toLatLngObject,
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          this.cabService.distance = +(
            response.routes[0].legs[0].distance.value / 1000 +
            ''
          );
        } else {
          alert('Failed to calcualate Distance');
          this.navCtrl.back();
        }
      }
    );
  }
  ngOnInit() {}
  book() {
    this.dataService
      ._post(
        'cab-rides',
        {},
        {
          data: {
            user: this.dataService.profile.id,
            type: this.cabService.type,
            from: this.cabService.from,
            to: this.cabService.to,
            distance: this.cabService.distance,
            cab: this.cabService.selectedCabId,
            otp: Math.floor(1000 + Math.random() * 9000) + '',
            fromLat: this.cabService.fromLatLngObject.lat(),
            fromLng: this.cabService.fromLatLngObject.lng(),
            toLat: this.cabService.toLatLngObject.lng(),
            toLng: this.cabService.toLatLngObject.lng(),
            // eslint-disable-next-line radix
            baseFare: parseInt(this.cabService.baseFare + ''),
            // eslint-disable-next-line radix
            tax: parseInt(this.cabService.tax + ''), // eslint-disable-next-line radix
            total: parseInt(this.cabService.total + ''),
          },
        }
      )
      .subscribe((data) => {});
  }
}
