import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import qs from 'qs';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';
@Component({
  selector: 'app-shopping-orders',
  templateUrl: './shopping-orders.page.html',
  styleUrls: ['./shopping-orders.page.scss'],
})
export class ShoppingOrdersPage implements OnInit {
  userDetails;
  orders:any = [];
  tabStatus = 'pending'
  constructor(public http: HttpClient, public dataService: DataService, public router: Router,public shoppingService:ShoppingCartService) { }

  ngOnInit() {
    this.shoppingService.getOrders()
  }
  ionViewWillEnter(){

  }

  







  statusToColor(status){
    switch (status) {
      case 'pending':
        return 'success'
      case 'accepted':
        return 'secondary'
      case 'rejected':
        return 'primary'
      case 'completed':
        return 'secondary'
        
        
      default:
        break;
    }

  }
}
