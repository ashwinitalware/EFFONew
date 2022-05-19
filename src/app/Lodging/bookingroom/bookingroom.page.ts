import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-bookingroom',
  templateUrl: './bookingroom.page.html',
  styleUrls: ['./bookingroom.page.scss'],
})
export class BookingroomPage implements OnInit {
  slideOptions11 = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 500,
  };
  constructor() { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }


  ngOnInit() {
  }

}
