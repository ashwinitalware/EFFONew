import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.page.html',
  styleUrls: ['./beauty.page.scss'],
})
export class BeautyPage implements OnInit {


  switchTab = 'civil'
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor() { }

  ngOnInit() {
  }

}
