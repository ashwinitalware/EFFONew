import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-all-transport',
  templateUrl: './cab-all-transport.page.html',
  styleUrls: ['./cab-all-transport.page.scss'],
})
export class CabAllTransportPage implements OnInit {
  isCardSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  toggleCardColor() {
    this.isCardSelected = !this.isCardSelected;
  }
  

}
