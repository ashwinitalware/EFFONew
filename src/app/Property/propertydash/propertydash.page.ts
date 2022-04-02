import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-propertydash',
  templateUrl: './propertydash.page.html',
  styleUrls: ['./propertydash.page.scss'],
})
export class PropertydashPage implements OnInit {
  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
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
