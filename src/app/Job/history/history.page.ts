import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  data: any = [];
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {
    this.getHistory();
  }
  getHistory() {
    this.http
      .get(this.dataService.apiUrl + 'job-applications', {
        params: {
          'filters[applicant][id][$eq]': this.dataService.profile.id + '',
          populate: '*',
        },
      })
      .subscribe((data: any) => {
        this.data = data.data;
      });
  }
  statusToClass(status) {
    switch (status) {
      case 'pending':
        return 'bg-blue-600 text-white';
        break;
      case 'accepted':
        return 'bg-green-600 text-white';
        break;
      case 'rejected':
        return 'bg-red-600 text-white';
        break;

      default:
        break;
    }
  }

  jobDetails(application) {
    console.log(application);

    this.navCtrl.navigateForward([
      '/jobdetails/' + application.attributes.jobPost.data.id,
    ]);
    // alert(job.application.attributes.jobPost.data)
  }

  ngOnInit() {}
}
