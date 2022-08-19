import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restaurant-order-details',
  templateUrl: './restaurant-order-details.page.html',
  styleUrls: ['./restaurant-order-details.page.scss'],
})
export class RestaurantOrderDetailsPage implements OnInit {
  order = undefined;
  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public ds: DataService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.http
      .get(
        this.ds.apiUrl +
          'restaurant-orders/' +
          this.activatedRoute.snapshot.params.orderId,
        {
          params: {
            populate: '*',
          },
          // params: {
          //   populate: '*',
          //   'filters[order][id][$eq]': this.activatedRoute.snapshot.params.id,
          //   'pagination[page]': this.pageNo,
          //   'pagination[pageSize]': this.pageSize
          // },
        }
      )
      .subscribe((data: any) => {
        this.order = data.data;
        // if(data.data){
        //   this.ordDate = data.data[0]?.attributes?.createdAt;
        //   this.orderDetails = data.data[0]?.attributes?.order;
        // }
      });
  }

  onImgError(event) {
    event.target.src = './assets/noProducts.jpg';
    //Do other stuff with the event.target
  }
}
