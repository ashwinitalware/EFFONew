import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-operator',
  templateUrl: './choose-operator.page.html',
  styleUrls: ['./choose-operator.page.scss'],
})
export class ChooseOperatorPage implements OnInit {

  constructor(public utilityService: UtilityService, public navCtrl: NavController) { }

  ngOnInit() {
  }
  operatorSelected(operator) {
    this.utilityService.tempOperatorCode = operator.APICode
    this.utilityService.tempOperatorName = operator.OperatorName
    this.navCtrl.navigateForward([`/choose-operator-region/`])
    // this.navCtrl.back()
  }

}
