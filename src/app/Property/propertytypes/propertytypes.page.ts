import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertytypes',
  templateUrl: './propertytypes.page.html',
  styleUrls: ['./propertytypes.page.scss'],
})
export class PropertytypesPage implements OnInit {

  constructor() { }

  switchTab = 'all'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  ngOnInit() {
  }

}
