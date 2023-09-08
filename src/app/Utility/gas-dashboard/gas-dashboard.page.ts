import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gas-dashboard',
  templateUrl: './gas-dashboard.page.html',
  styleUrls: ['./gas-dashboard.page.scss'],
})
export class GasDashboardPage implements OnInit {

  slider: any;
  constructor() { }
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  ngOnInit() {
  }

}
