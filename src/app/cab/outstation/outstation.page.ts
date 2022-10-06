import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outstation',
  templateUrl: './outstation.page.html',
  styleUrls: ['./outstation.page.scss'],
})
export class OutstationPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  switchTab = 'onewaytrip'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }
  constructor() { }

  ngOnInit() {
  }

}
