import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-transport',
  templateUrl: './cab-transport.page.html',
  styleUrls: ['./cab-transport.page.scss'],
})
export class CabTransportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: true,
  }
}
