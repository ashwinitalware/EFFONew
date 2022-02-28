import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-allshopcategories',
  templateUrl: './allshopcategories.page.html',
  styleUrls: ['./allshopcategories.page.scss'],
})
export class AllshopcategoriesPage implements OnInit {

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
