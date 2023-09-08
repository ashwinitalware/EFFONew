import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-dashboard',
  templateUrl: './utility-dashboard.page.html',
  styleUrls: ['./utility-dashboard.page.scss'],
})
export class UtilityDashboardPage implements OnInit {
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
