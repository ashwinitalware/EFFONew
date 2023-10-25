import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-all-vehicle',
  templateUrl: './cab-all-vehicle.page.html',
  styleUrls: ['./cab-all-vehicle.page.scss'],
})
export class CabAllVehiclePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCardSelected: boolean = false;

  toggleCardColor() {
    this.isCardSelected = !this.isCardSelected;
  }
  

}
