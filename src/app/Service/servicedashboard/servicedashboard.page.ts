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


  slider: any;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  slideOptss = {
    initialSlide: 0,
    slidesPerView: 2.5,
  }
  constructor() { }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }
  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }


  ngOnInit() {
  }

}
