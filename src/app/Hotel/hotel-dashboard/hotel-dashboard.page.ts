import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.page.html',
  styleUrls: ['./hotel-dashboard.page.scss'],
})
export class HotelDashboardPage implements OnInit {

  constructor(public hotelService: HotelService) { }

  ngOnInit() {
  }

}
