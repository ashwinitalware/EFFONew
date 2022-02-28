import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-servicedashboard',
  templateUrl: './servicedashboard.page.html',
  styleUrls: ['./servicedashboard.page.scss'],
})
export class ServicedashboardPage implements OnInit {

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
