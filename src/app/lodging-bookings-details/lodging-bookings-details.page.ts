import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lodging-bookings-details',
  templateUrl: './lodging-bookings-details.page.html',
  styleUrls: ['./lodging-bookings-details.page.scss'],
})
export class LodgingBookingsDetailsPage implements OnInit {
  booking;
  constructor(
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.getBookingDetails();
  }

  ngOnInit() {}
  getBookingDetails() {
    this.dataService
      ._get(
        'lodge-bookings/' + this.activatedRoute.snapshot.params.bookingId,
        'populate=*'
      )
      .subscribe((data) => {
        this.booking = data.data;
      });
  }
}
