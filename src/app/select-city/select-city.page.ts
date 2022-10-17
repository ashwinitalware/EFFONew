import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.page.html',
  styleUrls: ['./select-city.page.scss'],
})
export class SelectCityPage implements OnInit {
  constructor(public ds: DataService) {}

  ngOnInit() {}
}
