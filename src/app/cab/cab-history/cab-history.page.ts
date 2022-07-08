import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/services/cab.service';
import { DataService } from 'src/app/services/data.service';
import qs from 'qs';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cab-history',
  templateUrl: './cab-history.page.html',
  styleUrls: ['./cab-history.page.scss'],
})
export class CabHistoryPage implements OnInit {
  // type='local'

  constructor(
    public dataService: DataService,
    public cabService: CabService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {
    this.cabService.getHistoryRides();
  }

  ngOnInit() {}
}
