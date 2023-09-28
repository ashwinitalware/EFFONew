import { Component, OnInit, ViewChild } from '@angular/core';
import { BusService } from '../bus.service';
import { IonContent } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bus-dashboard',
  templateUrl: './bus-dashboard.page.html',
  styleUrls: ['./bus-dashboard.page.scss'],
})
export class BusDashboardPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;


  todayDate = new Date().toISOString().split('T')[0]
  constructor(public busService: BusService, public ds: DataService) {
    // this.busService.payment()

  }
  checkValue(type) {
    console.log('tuype', type);
    setTimeout(() => {
      if (type == 'from') {
        if (!this.busService.inputs.fromCityId) {
          this.busService.inputs.from = ""
          this.ds.presentToast("Select City from suggestions")
        }
      }
      else {
        if (!this.busService.inputs.toCityId) {
          this.busService.inputs.to = ""
          this.ds.presentToast("Select City from suggestions")
        }
      }
    }, 500);


  }
  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  dev() {
    // this.busService.inputs.fromCityId="4135"
    // this.busService.inputs.toCityId="4327"
    // this.busService.inputs.date="2023-07-13"
    // this.busService.inputs.passenger="1"
    // this.busService.getBuses()
    this.busService.getAllBookings()


  }
  ngOnInit() {
    this.dev()
  }

  inputChange(ev) {
    this.busService.filterBus()

  }
  clearSearch() {
    this.busService.filters.name = ""
    this.busService.filterBus()
  }

  clearInput(source) {
    if (source == 'from') {
      this.busService.inputs.from = ''
      this.busService.inputs.fromCityId = ''
    }
    else {

      this.busService.inputs.to = ''
      this.busService.inputs.toCityId = ''


    }

  }

}
