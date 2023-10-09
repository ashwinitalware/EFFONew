import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.page.html',
  styleUrls: ['./hotel-dashboard.page.scss'],
})
export class HotelDashboardPage implements OnInit {

  constructor(public hotelService: HotelService, public router: Router) { }

  ngOnInit() {
  }
  hotelSelected(hotel) {
    this.router.navigate([`/select-room/${this.hotelService.searchId}/${hotel.hotelInfo.hotelId}`])

  }

}
