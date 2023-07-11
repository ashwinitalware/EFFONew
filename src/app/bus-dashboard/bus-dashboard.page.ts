import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-dashboard',
  templateUrl: './bus-dashboard.page.html',
  styleUrls: ['./bus-dashboard.page.scss'],
})
export class BusDashboardPage implements OnInit {

  constructor(public busService: BusService) { }

  ngOnInit() {
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
