import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastag-dashboard',
  templateUrl: './fastag-dashboard.page.html',
  styleUrls: ['./fastag-dashboard.page.scss'],
})
export class FastagDashboardPage implements OnInit {

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
