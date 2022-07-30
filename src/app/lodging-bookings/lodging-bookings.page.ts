import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import qs from 'qs';
@Component({
  selector: 'app-lodging-bookings',
  templateUrl: './lodging-bookings.page.html',
  styleUrls: ['./lodging-bookings.page.scss'],
})
export class LodgingBookingsPage implements OnInit {
  bookings = [];

  constructor(public dataService: DataService) {
    this.getBookings();
  }

  ngOnInit() {}

  getBookings() {
    let query = qs.stringify({
      // populate:'*',
      populate: {
        rooms: '*',

        vendor: {
          populate: ['lodging_profile'],
        },
      },

      sort: ['createdAt:desc'],
      filters: {
        customer: this.dataService.profile.id,
      },
    });

    this.dataService._get('lodge-bookings', query).subscribe((data) => {
      this.bookings = data.data;
    });
  }
}
