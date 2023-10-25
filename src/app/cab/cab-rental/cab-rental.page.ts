import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-rental',
  templateUrl: './cab-rental.page.html',
  styleUrls: ['./cab-rental.page.scss'],
})
export class CabRentalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: true,
  }

}
