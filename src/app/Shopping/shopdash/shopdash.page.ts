import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-shopdash',
  templateUrl: './shopdash.page.html',
  styleUrls: ['./shopdash.page.scss'],
})
export class ShopdashPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }


  ngOnInit() {
  }

}
