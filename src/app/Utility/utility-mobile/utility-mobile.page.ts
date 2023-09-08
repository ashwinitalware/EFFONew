import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-mobile',
  templateUrl: './utility-mobile.page.html',
  styleUrls: ['./utility-mobile.page.scss'],
})
export class UtilityMobilePage implements OnInit {

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
