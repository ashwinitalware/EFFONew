import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-cabserdashboard',
  templateUrl: './cabserdashboard.page.html',
  styleUrls: ['./cabserdashboard.page.scss'],
})
export class CabserdashboardPage implements OnInit {

  // slider: any;

  // slideOptss = {
  //   initialSlide: 0,
  //   slidesPerView: 2.5,
  // }

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
