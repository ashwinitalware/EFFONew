import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-outstation',
  templateUrl: './cab-outstation.page.html',
  styleUrls: ['./cab-outstation.page.scss'],
})
export class CabOutstationPage implements OnInit {

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

switchTab = 'one';
  constructor() { }

  ngOnInit() {
  }

}
