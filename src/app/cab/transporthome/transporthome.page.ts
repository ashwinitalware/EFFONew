import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporthome',
  templateUrl: './transporthome.page.html',
  styleUrls: ['./transporthome.page.scss'],
})
export class TransporthomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.2,
    autoplay: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
