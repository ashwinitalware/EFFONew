import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import qs from 'qs';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CabService } from 'src/app/services/cab.service';
@Component({
  selector: 'app-cab-history-details',
  templateUrl: './cab-history-details.page.html',
  styleUrls: ['./cab-history-details.page.scss'],
})
export class CabHistoryDetailsPage implements OnInit {
  data;
  constructor(
    public dataService: DataService,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public cabService: CabService
  ) {
    this.getRideDetails();
  }

  getRideDetails() {
    let query = qs.stringify({
      populate: {
        user: {
          populate: '*',
        },

        cab: {
          populate: '*',
        },
        driver: {
          populate: '*',
        },
      },
      // populate: '*',
      // filters: {
      //   id: {
      //     $eq: this.activatedRoute.snapshot.params.id,
      //   },
      // },
    });
    this.dataService
      ._get('cab-rides/' + this.activatedRoute.snapshot.params.id, query)
      .subscribe((data) => {
        this.data = data.data;
      });
  }
  ngOnInit() {}
  cancel() {
    this.dataService.present();
    this.dataService
      ._put('cab-rides/' + this.activatedRoute.snapshot.params.id, '', {
        data: {
          status: 'cancelled',
          cancelledBy: 'customer',
        },
      })
      .subscribe(
        (data) => {
          this.dataService.dismiss();
          this.navCtrl.navigateBack(['/cab-tabs/history']);
          this.cabService.getHistoryRides();
          // this.dataService.presentToast('')
        },
        (err) => {
          this.dataService.dismiss();
        }
      );
  }
}
