import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recharge-history',
  templateUrl: './recharge-history.page.html',
  styleUrls: ['./recharge-history.page.scss'],
})
export class RechargeHistoryPage implements OnInit {
  history = []
  constructor(public dataService: DataService) {
    this.getRecharges()
  }
  getRecharges() {
    this.dataService._get('recharges?sort[id]=desc&filters[user]=' + this.dataService.profile.id, "").subscribe(data => {
      this.history = data.data
    })
  }

  ngOnInit() {
  }

}
