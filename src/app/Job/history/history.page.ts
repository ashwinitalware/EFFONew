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
  segment='pending'
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
          sort: 'createdAt:desc',
          'filters[applicant][id][$eq]': this.dataService.profile.id + '',
          'filters[status][$eq]': this.segment + '',
          populate: '*',
        },
      })
      .subscribe((data: any) => {
        this.data = data.data;
      });
  }

  segmentChanged(event) {
    console.log(event);

    // alert(this.segment);
    this.getHistory();
  }
  statusToClass(status) {
    switch (status) {
      case 'pending':
        return 'bg-blue-600 text-white';
        break;
      case 'accepted':
        return 'bg-green-600 text-white';
        break;
      case 'selected':
        return 'bg-green-600 text-white';
        break;
      case 'shortlisted':
        return 'bg-yellow-600 text-white';
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
