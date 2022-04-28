import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    autoplay: true
  };

  slideOptss = {
    initialSlide: 0,
    slidesPerView: 2.5,
  }

  bookride = false;
  subscription: any;

  book_ride() {
    this.bookride = true
  }

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
      link: 'servicedashboard',
    },
    {
      name: 'Cab',
      image: '',
      icon: 'car',
      link: 'cabserdashboard',
    },
    {
      name: 'Property',
      image: '',
      icon: 'home',
      link: 'propertydash',
    },
    {
      name: 'Shopping',
      image: '',
      icon: 'bag-handle',
      link: 'shopdash',
    },
    {
      name: 'Ticket Booking',
      image: '',
      icon: 'ticket',
      link: '',
    },
    {
      name: 'Old EX',
      image: '',
      icon: 'swap-horizontal',
      link: 'oldexdashboard',
    },
    {
      name: 'Utility',
      image: '',
      link: '',
      icon: 'podium',
    },

    {
      name: 'Lodging',
      image: '',
      link: '',
      icon: 'bed',
    },
    {
      name: 'Restaurant ',
      image: '',
      link: '',
      icon: 'restaurant',
    },
    {
      name: '24/7 ',
      image: '',
      link: '',
      icon: 'aperture',
    },
  ];

  constructor(
    public platform: Platform,
    public router: Router,
  ) { }
  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }


  ngOnInit() {
  }


  navigate(category) {
    if (category.link) {
      this.router.navigate(['/' + category.link])
    }

    else {
      alert('Coming Soon')
    }
  }

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(
      -1,
      () => {
        // tslint:disable-next-line: triple-equals
        if (window.location.pathname == '/first') {
          navigator['app'].exitApp();
        } else {
          return;
        }
      }

    );
  }


}
