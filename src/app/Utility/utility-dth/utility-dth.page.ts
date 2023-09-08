import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-dth',
  templateUrl: './utility-dth.page.html',
  styleUrls: ['./utility-dth.page.scss'],
})
export class UtilityDTHPage implements OnInit {

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
