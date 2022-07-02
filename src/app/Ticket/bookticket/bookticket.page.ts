import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.page.html',
  styleUrls: ['./bookticket.page.scss'],
})
export class BookticketPage implements OnInit {

  switchTab = 'civil'

  router: any;
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor() { }

  ngOnInit() {
  }

}
