import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ridestatus',
  templateUrl: './ridestatus.page.html',
  styleUrls: ['./ridestatus.page.scss'],
})
export class RidestatusPage implements OnInit {
  height = 0
  constructor() {
    this.height = window.innerHeight
  }

  ngOnInit() {
  }

}
