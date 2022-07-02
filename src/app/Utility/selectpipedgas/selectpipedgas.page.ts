import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectpipedgas',
  templateUrl: './selectpipedgas.page.html',
  styleUrls: ['./selectpipedgas.page.scss'],
})
export class SelectpipedgasPage implements OnInit {

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
