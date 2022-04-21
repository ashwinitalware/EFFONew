import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-propertydash',
  templateUrl: './propertydash.page.html',
  styleUrls: ['./propertydash.page.scss'],
})
export class PropertydashPage implements OnInit {
  bride_list;

  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 500,
  };

  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }
  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }

  switchTab = 'all'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }




  ngOnInit() {
  }

}
