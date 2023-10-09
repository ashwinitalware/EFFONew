import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.page.html',
  styleUrls: ['./select-room.page.scss'],
})
export class SelectRoomPage implements OnInit {

  constructor(public route: ActivatedRoute, public hotelService: HotelService, public router: Router) {
    this.hotelService.getrooms(this.route.snapshot.params.searchId, this.route.snapshot.params.hotelId)
  }

  ngOnInit() {
  }
  roomSelected(room) {
    this.router.navigate([`/hotel-checkout/${room.ratePlans[0].itineraryKey}`])
  }

}
