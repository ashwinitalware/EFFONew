import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import qs from 'qs';
@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.page.html',
  styleUrls: ['./service-history.page.scss'],
})
export class ServiceHistoryPage implements OnInit {
  segment = 'pending';
  data: any = [];
  noDataFound = false;
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {
    // this.getHistory();
  }
  getHistory() {
    this.noDataFound = false;
    const query = qs.stringify({
      sort: 'createdAt:desc',
      filters: {
        user: {
          id: {
            $eq: this.dataService.profile.id + '',
          },
        },
        status: {
          $eq: this.segment + '',
        },
      },
      populate: {
        services: {
          services: '*',
        },
        user: {
          populate: '*',
        },
        vendor: {
          populate: '*',
        },
      },
    });
    this.http
      .get(
        this.dataService.apiUrl + 'service-bookings?' + query
        // ,
        //   {
        //   params: {
        //     sort: 'createdAt:desc',
        //     'filters[user][id][$eq]': this.dataService.profile.id + '',
        //     'filters[status][$eq]': this.segment + '',
        //     populate: '*',
        //   },
        // }
      )
      .subscribe((data: any) => {
        this.data = data.data;
        this.noDataFound = false;
        if (!this.data.length) this.noDataFound = true;
      });
  }
  ionViewDidEnter() {
    this.getHistory();
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

  bookingDetails(booking) {
    console.log(booking);

    this.navCtrl.navigateForward(['/booking-details/' + booking.id]);
    // alert(job.application.attributes.jobPost.data)
  }

  ngOnInit() {}
}
