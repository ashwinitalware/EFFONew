import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/services/cab.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  constructor(public cabService: CabService) {
    // select first city
    if (this.cabService.cities.length) {
      const city = this.cabService.cities[0];
      this.cabService.selectedCityObj = city;
      this.cabService.selectedCityId = city.id + '';
      this.cabService.features = city.attributes.features.data;
      if (this.cabService.features.length)
        this.cabService.featureSelected =
          this.cabService.features[0].attributes.name;
    }
  }

  ngOnInit() {}
  citySelected(event) {
    this.cabService.cities.forEach((city) => {
      if (city.id == event) {
        this.cabService.selectedCityObj = city;
        this.cabService.features = city.attributes.features.data;
        if (this.cabService.features.length)
          this.cabService.featureSelected =
            this.cabService.features[0].attributes.name;
      }
    });
    console.log(this.cabService.selectedCityObj);
  }
}
