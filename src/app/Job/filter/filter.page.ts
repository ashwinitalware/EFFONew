import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  // location1 = false;
  type = 'location'
  // location_on() {
  //   this.location1 = true
  // }
  constructor() { }


  ngOnInit() {
  }

}
