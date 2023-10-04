import { Component, OnInit, ViewChild } from '@angular/core';
import { BusService } from '../bus.service';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-bus-booking-review',
  templateUrl: './bus-booking-review.page.html',
  styleUrls: ['./bus-booking-review.page.scss'],
})
export class BusBookingReviewPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  constructor(public busService: BusService) {

    this.busService.resetCoupon()
    this.busService.getBusReview()
    this.busService.selectedPickupName = ''
    this.busService.selectedDropName = ''

  }
  toggleAccordion = (event) => {
    console.log('abc', event);
    this.busService.pick.forEach(stop => {
      if (stop.id == event)
        this.busService.selectedPickupName = stop.time + " - " + stop.name

    });
    this.busService.drop.forEach(stop => {
      if (stop.id == event)
        this.busService.selectedDropName = stop.time + " - " + stop.name

    });



    const nativeEl = this.accordionGroup;
    console.log(nativeEl);


    nativeEl.value = undefined;

  };
  ngOnInit() {
  }

}
