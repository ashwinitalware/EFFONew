import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.page.html',
  styleUrls: ['./ridedetails.page.scss'],
})
export class RidedetailsPage implements OnInit {

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 500,
  };

  constructor() { }

  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }


  ngOnInit() {
  }

}
