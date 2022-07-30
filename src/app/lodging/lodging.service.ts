import { Injectable } from '@angular/core';
import qs from 'qs';
import { DataService } from '../services/data.service';
@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  bookings = [];

  constructor(public dataService: DataService) {}
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
