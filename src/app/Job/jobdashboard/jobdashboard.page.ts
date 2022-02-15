import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdashboard',
  templateUrl: './jobdashboard.page.html',
  styleUrls: ['./jobdashboard.page.scss'],
})
export class JobdashboardPage implements OnInit {

  temp = "IT Industry"

  bookride = false;
  selectedLeave: string = '';

  book_ride() {
    this.bookride = true
  }

  slider: any;
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,

  };
  slideOptss = {
    initialSlide: 0,
    slidesPerView: 2.5,
  }

  switchTab = 'job'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor() { }
  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }

  ngOnInit() {
  }

}
