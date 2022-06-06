import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/services/cab.service';

@Component({
  selector: 'app-cab-confirm-booking',
  templateUrl: './cab-confirm-booking.page.html',
  styleUrls: ['./cab-confirm-booking.page.scss'],
})
export class CabConfirmBookingPage implements OnInit {

  constructor(public cabService:CabService) { 
    this.cabService.getCabTypes()
  }

  ngOnInit() {
  }

}
