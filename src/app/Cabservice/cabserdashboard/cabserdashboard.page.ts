import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-cabserdashboard',
  templateUrl: './cabserdashboard.page.html',
  styleUrls: ['./cabserdashboard.page.scss'],
})
export class CabserdashboardPage implements OnInit {

  switchTab = 'local'

  // segmentChanged(ev: any) {
  //   this.switchTab = ev.detail.value;
  //   console.log('Segment changed', ev);
  // }
  // slider: any;

  // slideOptss = {
  //   initialSlide: 0,
  //   slidesPerView: 2.5,
  // }

  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 4,
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
