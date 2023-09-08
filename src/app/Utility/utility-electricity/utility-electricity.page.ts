import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-electricity',
  templateUrl: './utility-electricity.page.html',
  styleUrls: ['./utility-electricity.page.scss'],
})
export class UtilityElectricityPage implements OnInit {

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
