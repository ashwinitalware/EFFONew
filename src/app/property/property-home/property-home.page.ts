import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.page.html',
  styleUrls: ['./property-home.page.scss'],
})
export class PropertyHomePage implements OnInit {


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
