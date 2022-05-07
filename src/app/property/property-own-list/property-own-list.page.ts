import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import qs from 'qs';
import { PropertyService } from 'src/app/service/property.service';
@Component({
  selector: 'app-property-own-list',
  templateUrl: './property-own-list.page.html',
  styleUrls: ['./property-own-list.page.scss'],
})
export class PropertyOwnListPage implements OnInit {

  constructor(
    public http: HttpClient,
    public dataService: DataService,
    public propertyService: PropertyService
  ) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.propertyService.getMyProperties();
  }

  ionViewWillEnter() {}
}
