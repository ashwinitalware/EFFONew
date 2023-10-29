import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';
import qs from 'qs';
import { DataService } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-utility-mobile',
  templateUrl: './utility-mobile.page.html',
  styleUrls: ['./utility-mobile.page.scss'],
})
export class UtilityMobilePage implements OnInit {

  slider: any;
  sliders = [

  ]



  constructor(public utilityService: UtilityService, public dataService: DataService, public navCtrl: NavController) {
    this.getSliders()
  }
  changeOperator() {
    this.navCtrl.navigateForward(['/choose-operator'])
  }
  getSliders() {
    const query = qs.stringify({
      filters: {
        position: 'utilityHome',
      },
      populate: '*',
    });
    this.dataService._get('sliders', query).subscribe((data) => {
      this.sliders = data.data;
    });
  }
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  ngOnInit() {
  }

}
