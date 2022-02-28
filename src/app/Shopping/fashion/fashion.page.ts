import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.page.html',
  styleUrls: ['./fashion.page.scss'],
})
export class FashionPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  slideOppt = {
    initialSlide: 2.9,
    speed: 600,

  };


  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
