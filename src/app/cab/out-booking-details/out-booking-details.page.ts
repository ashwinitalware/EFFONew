import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-out-booking-details',
  templateUrl: './out-booking-details.page.html',
  styleUrls: ['./out-booking-details.page.scss'],
})
export class OutBookingDetailsPage implements OnInit {
  canDismiss = false;

  presentingElement = null;

  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

}
