import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import qs from 'qs';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {
  data;
  constructor(
    public http: HttpClient,
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.getData();
  }
  getData() {
    const query = qs.stringify({
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
        this.dataService.apiUrl +
          'service-bookings/' +
          this.activatedRoute.snapshot.params.id +
          '?' +
          query
      )
      .subscribe((data: any) => {
        this.data = data.data;
      });
  }
  rating() {
    this.dataService.confirmSwal('', 'Review Submitted ! ');
    this.http
      .put(
        this.dataService.apiUrl +
          'service-bookings/' +
          this.activatedRoute.snapshot.params.id,
        {
          data: {
            rating: this.data.attributes.rating,
            review: this.data.attributes.review,
          },
        }
      )
      .subscribe((data) => {});
  }

  ngOnInit() {}
}
