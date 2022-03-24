import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-acservicesdestails',
  templateUrl: './acservicesdestails.page.html',
  styleUrls: ['./acservicesdestails.page.scss'],
})
export class AcservicesdestailsPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 500,
  };

  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
