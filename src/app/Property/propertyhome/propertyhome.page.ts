import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-propertyhome',
  templateUrl: './propertyhome.page.html',
  styleUrls: ['./propertyhome.page.scss'],
})
export class PropertyhomePage implements OnInit {

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

  ngOnInit() {
  }

}
