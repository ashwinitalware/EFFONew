import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import qs from 'qs';
import { LodgingService } from '../lodging/lodging.service';
@Component({
  selector: 'app-lodging-bookings',
  templateUrl: './lodging-bookings.page.html',
  styleUrls: ['./lodging-bookings.page.scss'],
})
export class LodgingBookingsPage implements OnInit {
  constructor(
    public dataService: DataService,
    public lodgingService: LodgingService
  ) {
    this.lodgingService.getBookings();
  }

  ngOnInit() {}
}
