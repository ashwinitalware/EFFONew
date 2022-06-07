import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import qs from 'qs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-orders',
  templateUrl: './shopping-orders.page.html',
  styleUrls: ['./shopping-orders.page.scss'],
})
export class ShoppingOrdersPage implements OnInit {
  userDetails;
  orders:any = [];
  tabStatus = 'pending'
  constructor(public http: HttpClient, public ds: DataService, public router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    var data = localStorage.getItem('effoProfileVendor2');
    this.userDetails =JSON.parse(data);
    this.getOrders('pending');
    console.log(this.ds.profile.id)
  }

  
  segmentChanged(ev){
    console.log(ev)
    this.tabStatus = ev.detail.value; 
    this.getOrders(this.tabStatus);
  }

  getOrders(type){
    const query = qs.stringify({
      sort: ['createdAt:desc'],
      'filters[user][id][$eq]': this.ds.profile.id,
      'filters[status][$eq]': type,
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
      .get(this.ds.apiUrl + 'shopping-orders?'+query)
      .subscribe((data: any) => {
        if(data && data.data){
          this.orders = data.data;
          this.orders.forEach(ord => {
            if(ord.attributes.orderProducts.data.length !=0){
            ord.productName = ord?.attributes?.orderProducts?.data[0]?.attributes?.variation?.data?.attributes?.product?.data?.attributes?.name
            ord.productImg = ord?.attributes?.orderProducts?.data[0]?.attributes?.variation?.data?.attributes?.product?.data?.attributes?.image
            ord.productDescrip = ord?.attributes?.orderProducts?.data[0]?.attributes?.variation?.data?.attributes?.product?.data?.attributes?.description
            }
            var orderedProducts = ord.attributes.orderProducts.data;
            ord.productQuantity = 0;
            orderedProducts?.forEach(ordProd => {
              ord.productQuantity += ordProd?.attributes?.quantity;
            });
          });
        }else{
          this.orders = [];
        }
        console.log(this.orders)
      }, e =>{
        this.orders = [];
      });
  }

  onImgError(event){
    event.target.src = './assets/noProducts.jpg'
  //Do other stuff with the event.target
  }

  goToOrderDetials(productId){
    this.router.navigate(['shopping-order-details/'+productId]);
  }

}
