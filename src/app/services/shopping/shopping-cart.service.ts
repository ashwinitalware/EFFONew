import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public cartProducts:any = [];
  public shoppingProducts: any = [];

  orders:any = [];

  notFound=false



  constructor(public dataService:DataService,public http:HttpClient) { }

  getOrders(){
    this.orders=[]
    this.notFound=false
    const query = qs.stringify({
      'filters[user][id][$eq]': this.dataService.profile.id,
      sort: ['createdAt:desc'],
      populate: {
        user: {
          populate: '*'
        },
        orderProducts: {
          populate: {
            variation:{
              populate: '*'
            }
          },
        },
      }
    });

    this.http
      .get(this.dataService.apiUrl + 'shopping-orders?'+query)
      .subscribe((data: any) => {
          this.orders = data.data;
          if(this.orders.length==0)
          this.notFound=true
      
       
        console.log(this.orders)
      }, e =>{

        this.orders = [];
      });
  }

}
