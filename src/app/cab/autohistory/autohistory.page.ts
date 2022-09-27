import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autohistory',
  templateUrl: './autohistory.page.html',
  styleUrls: ['./autohistory.page.scss'],
})
export class AutohistoryPage implements OnInit {
  switchTab = 'ride'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }
  constructor() { }

  ngOnInit() {
  }

}
