import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.page.html',
  styleUrls: ['./hotel-dashboard.page.scss'],
})
export class HotelDashboardPage implements OnInit {
  todayDate = new Date().toISOString().split('T')[0]
  @ViewChild(IonContent) content: IonContent;
  constructor(public hotelService: HotelService, public router: Router) { }
  getTomorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
  ngOnInit() {
  }
  inputChange(ev) {
    this.hotelService.filter()

  }
  clearSearch() {
    this.hotelService.filters.name = ""

  }
  hotelSelected(hotel) {
    this.hotelService.selectectedHotel = hotel
    this.router.navigate([`/select-room/${this.hotelService.searchId}/${hotel.hotelInfo.hotelId}`])

  }

}
