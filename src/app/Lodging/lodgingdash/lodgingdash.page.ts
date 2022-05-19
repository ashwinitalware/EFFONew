import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-lodgingdash',
  templateUrl: './lodgingdash.page.html',
  styleUrls: ['./lodgingdash.page.scss'],
})
export class LodgingdashPage implements OnInit {

  switchTab = 'civil'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 6,
    speed: 500,
  };

  slideOptions = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 500,
  };

  slideOptions11 = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 500,
  };


  constructor() { }

  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}


