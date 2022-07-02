import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectcylinder',
  templateUrl: './selectcylinder.page.html',
  styleUrls: ['./selectcylinder.page.scss'],
})
export class SelectcylinderPage implements OnInit {
  slider: any;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    autoplay: true
  };

  constructor() { }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }

  ngOnInit() {
  }

}
