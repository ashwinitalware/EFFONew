import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliancesrepairing',
  templateUrl: './appliancesrepairing.page.html',
  styleUrls: ['./appliancesrepairing.page.scss'],
})
export class AppliancesrepairingPage implements OnInit {

  switchTab = 'civil'
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor() { }

  ngOnInit() {
  }

}
