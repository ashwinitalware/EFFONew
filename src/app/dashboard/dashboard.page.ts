import { Component, OnInit } from '@angular/core';
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

  constructor(
    public platform: Platform
  ) { }
  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }


  ngOnInit() {
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
