import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-selectplan',
  templateUrl: './utility-selectplan.page.html',
  styleUrls: ['./utility-selectplan.page.scss'],
})
export class UtilitySelectplanPage implements OnInit {

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
