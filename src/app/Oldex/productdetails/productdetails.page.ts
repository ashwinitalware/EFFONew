import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {

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
