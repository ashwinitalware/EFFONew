import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService } from '../services/data.service';
// import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  categories = [
    {
      name: 'Jobs',
      image: '',
      icon: 'briefcase',
      link: 'jobdashboard',
      available: true,
    },
    {
      name: 'Services',
      image: '',
      icon: 'apps',
      link: '',
    },
    // {
    //   name: 'Cab Services',
    //   image: '',
    //   icon: 'car',
    //   link: '',
    // },
    {
      name: 'Shopping',
      image: '',
      icon: 'bag-handle',
      link: '',
    },
    {
      name: 'Property',
      image: '',
      link: '',
      icon: 'home',
    },

    // {
    //   name: 'Ticket Booking',
    //   image: '',
    //   icon: 'ticket',
    //   link: '',
    // },
    // {
    //   name: 'Old EX',
    //   image: '',
    //   link: '',
    //   icon: 'swap-horizontal',
    // },
    // {
    //   name: 'Utility',
    //   image: '',
    //   icon: 'hammer',
    //   link: '',
    // },





    // {
    //   name: 'Lodging',
    //   image: '',
    //   link: '',
    //   icon: 'bed',
    // },
    // {
    //   name: 'Restaurant ',
    //   image: '',
    //   link: '',
    //   icon: 'restaurant',
    // },
    // {
    //   name: '24/7 ',
    //   image: '',
    //   link: '',
    //   icon: 'timer',
    // },
  ];
  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  slideOptss = {
    initialSlide: 0,
    slidesPerView: 2.5,
  };

  bookride = false;
  subscription: any;

  constructor(
    public platform: Platform,
    public dataService: DataService,
    public router: Router
  ) {
    this.dataService.auth.canLoad = false;
    this.dataService.syncFCMToken();
  }
  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }
  navigateCategory(category) {
    if (!category.link) {
      this.dataService.presentToast('Coming Soon', 'danger');
      return;
    }

    // if its a job. then check if the profile is complete

    this.router.navigate(['/' + category.link]);
  }
  ngOnInit() { }

  ionViewWillEnter() { }
}
