import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { PropertyService } from 'src/app/service/property.service';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.page.html',
  styleUrls: ['./property-home.page.scss'],
})
export class PropertyHomePage implements OnInit {
  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 500,
  };
  constructor(
    public propertyService: PropertyService,
    public navCtrl: NavController
  ) {}

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }
  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }

  ngOnInit() {}

  list(type) {
    this.propertyService.filters.type = type;
    this.navCtrl.navigateForward(['/property-list']);
  }
}
