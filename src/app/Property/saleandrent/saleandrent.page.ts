import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-saleandrent',
  templateUrl: './saleandrent.page.html',
  styleUrls: ['./saleandrent.page.scss'],
})
export class SaleandrentPage implements OnInit {

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
