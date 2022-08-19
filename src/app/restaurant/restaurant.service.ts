import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import qs from 'qs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public cartProducts: any = [];
  public shoppingProducts: any = [];
  selectedVendor
  orders: any = [];

  notFound = false;

  constructor(public dataService: DataService, public http: HttpClient) {}

  getOrders() {
    this.orders = [];
    this.notFound = false;
    const query = qs.stringify({
      'filters[user][id][$eq]': this.dataService.profile.id,
      sort: ['createdAt:desc'],
      populate: {
        user: {
          populate: '*',
        },
        orderFoods: {
          populate: {
            variation: {
              populate: '*',
            },
          },
        },
      },
    });

    this.http
      .get(this.dataService.apiUrl + 'restaurant-orders?' + query)
      .subscribe(
        (data: any) => {
          this.orders = data.data;
          if (this.orders.length == 0) this.notFound = true;

          console.log(this.orders);
        },
        (e) => {
          this.orders = [];
        }
      );
  }
}
