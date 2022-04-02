import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  categories = [
    {
      name: 'Appliances Repairing',
      image: '',
      icon: 'tv',
      link: 'subservices',
      available: true,
    },
    {
      name: 'Beauty',
      image: '',
      icon: 'sparkles',
      link: '',
      available: true,
    },
    {
      name: 'Contractor',
      image: '',
      icon: 'construct',
      link: 'contractorservices',
    },
    {
      name: 'Consultant',
      image: '',
      icon: 'bag-handle',
      link: '',
    },
    {
      name: 'Event',
      image: '',
      icon: 'desktop',
      link: '',
    },
    {
      name: 'Eduacation',
      image: '',
      icon: 'school',
      link: '',
    },
    {
      name: 'Home Repair & Decor',
      image: '',
      link: '',
      icon: 'home',
    },
    {
      name: 'Manpower Services',
      image: '',
      link: '',
      icon: 'people',
    },
    {
      name: 'Vehicle',
      image: '',
      link: '',
      icon: 'car-sport',
    },
  ]


  constructor(
    public router: Router,
  ) { }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }
  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }



  ngOnInit() {
  }

  navigate(category) {

    this.router.navigate(['/' + category.link])
  }

}
