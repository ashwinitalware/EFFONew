import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/services/cab.service';
import { DataService } from 'src/app/services/data.service';
import qs from 'qs';
import { NavController, ViewDidEnter } from '@ionic/angular';
@Component({
  selector: 'app-cab-history',
  templateUrl: './cab-history.page.html',
  styleUrls: ['./cab-history.page.scss'],
})
export class CabHistoryPage implements ViewDidEnter {
  // type='local'
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

switchTab = 'rides';

  constructor(
    public dataService: DataService,
    public cabService: CabService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {}

  ionViewDidEnter(): void {
    this.cabService.getHistoryRides();
  }
}
