import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.page.html',
  styleUrls: ['./hotel-booking.page.scss'],
})
export class HotelBookingPage implements OnInit {

  bookings = []
  notFound = false
  constructor(public ds: DataService, public hotelService: HotelService) {
    this.getBookings()
  }

  ngOnInit() {
  }

  getBookings() {
    this.bookings = []
    this.ds._get('hotel-bookings?filters[user]=' + this.ds.profile.id, "").subscribe(d => {
      this.bookings = d.data
      let i = 0
      this.bookings.forEach(booking => {
        this.getBookingDetails(i++)


      });
      setTimeout(() => {
        console.log(this.bookings);

      }, 10000);
      if (!this.bookings.length)
        this.notFound = true
    })
  }
  getBookingDetails(index) {

    this.ds._post('hotel-bookings/getbooking/', '', {
      "referenceNo": this.bookings[index].attributes.viaBookingId
    }).subscribe(d => {
      this.bookings[index].data = d
      this.bookings[index].data.data.totalAdults = 0
      if (d?.data)
        d.data.searchQuery.rooms.forEach(room => {
          this.bookings[index].data.data.totalAdults += room.adults

        });

      console.log(d);

    })

  }
}
