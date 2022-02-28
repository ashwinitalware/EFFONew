import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabserdashboard',
  templateUrl: './cabserdashboard.page.html',
  styleUrls: ['./cabserdashboard.page.scss'],
})
export class CabserdashboardPage implements OnInit {

  slider: any;

  slideOptss = {
    initialSlide: 0,
    slidesPerView: 2.5,
  }

  constructor() { }

  ngOnInit() {
  }

}
