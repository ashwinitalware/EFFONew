import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import qs from 'qs';
@Component({
  selector: 'app-shopping-order-details',
  templateUrl: './shopping-order-details.page.html',
  styleUrls: ['./shopping-order-details.page.scss'],
})
export class ShoppingOrderDetailsPage implements OnInit {
  public allOrders: any = [];
  public orderDetails:any;
  ordDate:any;
  pageNo = 1;
  pageSize = 10;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public ds: DataService, public router: Router) { }

  ngOnInit() {
    this.getOrderDetails(this.activatedRoute.snapshot.params.id);
  }

  getOrderDetails(id) {
    this.http.get(this.ds.apiUrl + 'shopping-order-products', {
      params: {
        populate: '*',
        'filters[order][id][$eq]': id,
        'pagination[page]': this.pageNo,
        'pagination[pageSize]': this.pageSize
      },
    })
      .subscribe((data: any) => {
        this.allOrders = data.data;
        console.log(this.allOrders);       
        if(data.data){
          this.ordDate = data.data[0]?.attributes?.createdAt;
          this.orderDetails = data.data[0]?.attributes?.order;
        }
        // this.allOrders?.forEach(cat => {
        //  cat.icon = 'close';
        // });
      });
  }

  onImgError(event) {
    event.target.src = './assets/noProducts.jpg'
    //Do other stuff with the event.target
  }
}
