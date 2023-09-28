import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { ServiceService } from '../service.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {
  add = false;
  add1 = false;
  data;
  descriptions = [];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public dataService: DataService,
    public activatedRoute: ActivatedRoute,
    public service: ServiceService, public iab: InAppBrowser
  ) {
    this.getData();
  }
  getData() {
    this.http
      .get(this.dataService.apiUrl + 'service-profiles', {
        params: {
          'filters[id][$eq]': this.activatedRoute.snapshot.params.id,
          populate: '*',
        },
      })
      .subscribe((data: any) => {
        if (data.data) this.data = data.data[0];
        this.service.selectedVendorId = this.data.attributes.vendor.data.id;
        try {
          let tempDescription = JSON.parse(
            this.data.attributes.descriptionJson
          );
          tempDescription.forEach((element) => { });
          this.descriptions = tempDescription;
        } catch (error) { }
      });
  }

  ngOnInit() { }
  book() {
    let canBook = false;
    this.service.selectedServices = [];
    this.data.attributes.serviceSubcategories.data.forEach((service) => {
      if (service.selected) {
        this.service.selectedServices.push(service);

        canBook = true;
      }
    });

    if (!canBook)
      return this.dataService.presentToast('Select A Service First');

    this.navCtrl.navigateForward(['/service-bookings']);
  }
  showDirection() {
    // console.log(
    //   `https://www.google.com/maps/search/?api=1&query=18.517238336308125,73.87826212583717`
    // );

    this.iab.create(
      `https://www.google.com/maps/search/?api=1&query=${this.data.attributes.businessLat},${this.data.attributes.businessLng}`,
      '_system'
    );
  }
}
