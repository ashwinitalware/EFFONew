import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-shopdash',
  templateUrl: './shopdash.page.html',
  styleUrls: ['./shopdash.page.scss'],
})
export class ShopdashPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  categories = [
    {
      name: 'All Catagories',
      image: '',
      icon: 'apps',
      link: 'allshopcategories',
      available: true,
    },
    {
      name: 'Mobile',
      image: '',
      icon: 'phone-portrait',
      link: 'mobile',
    },
    {
      name: 'Fashion',
      image: '',
      icon: 'shirt',
      link: '',
    },
    {
      name: 'Computer',
      image: '',
      icon: 'desktop',
      link: '',
    },

  ];

  constructor(
    public router: Router,
  ) { }

  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }


  ngOnInit() {
  }

  navigate(category) {

    this.router.navigate(['/' + category.link])
  }

}
