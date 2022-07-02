import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketdash',
  templateUrl: './ticketdash.page.html',
  styleUrls: ['./ticketdash.page.scss'],
})
export class TicketdashPage implements OnInit {
  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    autoplay: true
  };
  constructor() { }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }

  ngOnInit() {
  }

}
