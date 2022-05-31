import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.page.html',
  styleUrls: ['./shopping-history.page.scss'],
})
export class ShoppingHistoryPage implements OnInit {
  public allOrders:any = [];
  pageNo = 1;
  pageSize = 10;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public ds: DataService, public router: Router) { }

  ngOnInit() {
    this.getUserOrders(this.activatedRoute.snapshot.params.id);
  }

  getUserOrders(id){
    this.http.get(this.ds.apiUrl + 'shopping-orders', {
      params: {
        sort: ['createdAt:desc'],
        populate: '*',
        'filters[user][id][$eq]': id,
        'pagination[page]': this.pageNo,
        'pagination[pageSize]': this.pageSize
      },
    })
      .subscribe((data: any) => {
        this.allOrders = data.data;
        // this.allOrders?.forEach(cat => {
        //  cat.icon = 'close';
        // });
      });
  }

  onImgError(event) {
    event.target.src = './assets/noProducts.jpg'
    //Do other stuff with the event.target
  }

  orderDetails(id){
    this.router.navigate(['/shopping-order-details/'+id]);
  }

}
