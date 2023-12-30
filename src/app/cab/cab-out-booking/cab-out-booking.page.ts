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
  fare = {
    perKMPrice: 0,
    total: 0,
    tax: 0
  }
  // fareObject = {
  //   km: 0,
  //   fare: 0,
  //   taxAndFees: 0,
  //   total: 0,
  // };
  constructor(public ds: DataService, public cabService: CabService) {
    this.ds._get("cab-types", "?populate=*").subscribe(d => {
      this.cabs = d.data

      this.cabSelected(0)
    })
  }
  cabSelected(index) {
    this.cabs[0].selected = true

  }

  ngOnInit() {
  }

}
