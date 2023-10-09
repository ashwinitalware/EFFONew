import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-hotel-checkout',
  templateUrl: './hotel-checkout.page.html',
  styleUrls: ['./hotel-checkout.page.scss'],
})
export class HotelCheckoutPage implements OnInit {

  constructor(public hotelService: HotelService, public ar: ActivatedRoute) {

    this.hotelService.getReprice(this.ar.snapshot.params.key)

    // this.hotelService.repriceSyncGuests()

  }

  ngOnInit() {
  }

}
