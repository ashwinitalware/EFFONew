import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-dashboard',
  templateUrl: './bus-dashboard.page.html',
  styleUrls: ['./bus-dashboard.page.scss'],
})
export class BusDashboardPage implements OnInit {

  constructor(public busService: BusService) { 
    
  }
  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
dev(){
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
  citySelected(city, source) {
    this.busService.fromSuggestions = []
    this.busService.toSuggestions = []
    if (source == 'from') {
      this.busService.inputs.from = city.attributes.name
      this.busService.inputs.fromCityId = city.attributes.cityId
    }
    else {
      this.busService.inputs.to = city.attributes.name
      this.busService.inputs.toCityId = city.attributes.cityId
    }


  }
}
