import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/services/cab.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cab-out-booking',
  templateUrl: './cab-out-booking.page.html',
  styleUrls: ['./cab-out-booking.page.scss'],
})
export class CabOutBookingPage implements OnInit {

  cabs = []
  constructor(public ds: DataService, public cabService: CabService) { }

  ngOnInit() {
  }

}
