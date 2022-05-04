import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfavorite',
  templateUrl: './addfavorite.page.html',
  styleUrls: ['./addfavorite.page.scss'],
})
export class AddfavoritePage implements OnInit {
  switchTab = 'ads'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }
  constructor() { }



  ngOnInit() {
  }

}
