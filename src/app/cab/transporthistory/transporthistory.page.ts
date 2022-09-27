import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporthistory',
  templateUrl: './transporthistory.page.html',
  styleUrls: ['./transporthistory.page.scss'],
})
export class TransporthistoryPage implements OnInit {
  switchTab = 'ride'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }
  constructor() { }

  ngOnInit() {
  }

}
