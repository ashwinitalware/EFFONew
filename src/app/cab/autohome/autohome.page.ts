import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autohome',
  templateUrl: './autohome.page.html',
  styleUrls: ['./autohome.page.scss'],
})
export class AutohomePage implements OnInit {


  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4.2,
    autoplay: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
