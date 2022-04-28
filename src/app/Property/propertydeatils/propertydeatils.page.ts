import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-propertydeatils',
  templateUrl: './propertydeatils.page.html',
  styleUrls: ['./propertydeatils.page.scss'],
})
export class PropertydeatilsPage implements OnInit {
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
