import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-operator-region',
  templateUrl: './choose-operator-region.page.html',
  styleUrls: ['./choose-operator-region.page.scss'],
})
export class ChooseOperatorRegionPage implements OnInit {

  constructor(public utilityService: UtilityService, public navCtrl: NavController) { }

  ngOnInit() {
  }
  regionSelected(region) {
    this.utilityService.tempOperatorRegionName = region.Name
    this.utilityService.tempOperatorRegion = region.APICode
    // this.utilityService.te
    this.utilityService.fetchPlans(this.utilityService.tempOperatorCode, this.utilityService.tempOperatorRegion)
    this.navCtrl.navigateForward(['/utility-mobile'])
    // this.navCtrl.back()
  }
}
