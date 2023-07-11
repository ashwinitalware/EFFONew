import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import {
  IonRouterOutlet,
  NavController,
  Platform,
  PopoverController,
} from '@ionic/angular';
import { DataService } from '../services/data.service';
import { JobService } from '../services/job.service';
import qs from 'qs';
// import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  popupImage = '';
  queryText = '';
  suggestions = [];
  noSuggesions = false;
  modalClass = 'hidden';
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
      link: 'service-dashboard',
      available: true,
    },
    // {
    //   name: 'Cab Services',
    //   image: '',
    //   icon: 'car',
    //   // link: 'cab-home',
    //   link: 'cab-tabs',
    //   available: true,
    // },
    {
      name: 'Bus Bookings',
      image: '',
      icon: 'car',
      // link: 'cab-home',
      link: 'bus-dashboard',
      available: true,
    },
    {
      name: 'Old EX',
      image: '',
      link: 'oldex-dashboard',
      available: true,
      icon: 'swap-horizontal',
    },
    {
      name: 'Property',
      image: '',
      link: 'property-dashboard',
      icon: 'home',
      available: true,
    },
    // {
    //   name: 'Shopping',
    //   image: '',
    //   icon: 'bag-handle',
    //   link: 'shopping-dashboard',
    //   available: true,
    // },

    // {
    //   name: 'Ticket Booking',
    //   image: '',
    //   icon: 'ticket',
    //   link: '',
    // },

    // {
    //   name: 'Utility',
    //   image: '',
    //   icon: 'hammer',
    //   link: '',
    // },

    {
      name: 'Hotel & Lodging',
      image: '',
      link: 'lodging-dashboard',
      available: true,
      icon: 'bed',
    },
    // {
    //   name: 'Restaurant ',
    //   image: '',
    //   link: 'restaurant-dashboard',
    //   available: true,
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
    public router: Router,
    public navCtrl: NavController,
    public http: HttpClient,
    public jobService: JobService,
    public popoverController: PopoverController,
    public routerOutlet: IonRouterOutlet
  ) {
    // this.platform.backButton.subscribeWithPriority(-1, () => {
    //   if (!this.routerOutlet.canGoBack()) {
    //     alert('will exit');
    //     // App.exitApp();
    //   }
    // });
    // this.dataService.auth.canLoad = false;
    this.dataService.syncFCMToken();
    this.getPopupImage();
    this.dataService.getSliders();
    this.dataService.getSlidersSecond();
  }

  search() {
    this.noSuggesions = false;
    // alert(this.textQuery);
    if (!this.queryText) return (this.suggestions = []);
    this.http
      .get(this.dataService.apiUrl + 'custom/homeSearch', {
        params: {
          queryText: this.queryText,
        },
      })
      .subscribe((data: any) => {
        this.suggestions = [];
        console.log(data);
        if (data.jobs && data.jobs.length) {
          this.suggestions.push({
            title: this.queryText,
            type: 'job',
          });

          data.jobs.forEach((job) => {
            this.suggestions.push({
              title: job.title,
              type: 'job',
            });
          });
          // data.jobs.forEach((job) => {
          //   this.suggestions.push({
          //     title: job.skillsByComma,
          //     type: 'job',
          //   });
          // });
          // data.jobs.forEach((job) => {
          //   if (job.jobCategory)
          //     this.suggestions.push({
          //       title: job.jobCategory.name,
          //       type: 'job',
          //     });
          // });
        }
        this.suggestions = this.suggestions.slice(0, 5);
        if (!this.suggestions.length) this.noSuggesions = true;
      });
  }
  selected(suggestion) {
    if (suggestion.type == 'job') {
      this.jobService.resetOtherFilters();
      this.jobService.jobFilters.title = suggestion.title;
      this.router.navigate(['/joblist']);
    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DashboardPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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

  async ionViewDidEnter() {
    await SplashScreen.hide();
  }
  ionViewWillEnter() { }

  getPopupImage() {
    this.http
      .get(this.dataService.apiUrl + 'home-popups', {
        params: {
          'filters[expiry][$gt]': new Date().toISOString(),
        },
      })
      .subscribe((data: any) => {
        if (data.data.length) {
          if (window.localStorage.getItem('popupId') == data.data[0].id) {
            // alert('not showing popup');
          } else {
            window.localStorage.setItem('popupId', data.data[0].id + '');
            // alert('will show poput');

            setTimeout(() => {
              this.popupImage = data.data[0].attributes.image;
              this.modalClass = 'block';
            }, 2000);
          }
        }
      });
  }
}
