import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-booking-review',
  templateUrl: './bus-booking-review.page.html',
  styleUrls: ['./bus-booking-review.page.scss'],
})
export class BusBookingReviewPage implements OnInit {

  constructor(public busService:BusService) { }

  ngOnInit() {
  }

}
