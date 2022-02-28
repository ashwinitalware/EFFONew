import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-periodicser',
  templateUrl: './periodicser.page.html',
  styleUrls: ['./periodicser.page.scss'],
})
export class PeriodicserPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    slidesPerView: 1.5,
    speed: 500,
  };


  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }


  ngOnInit() {
  }

}
