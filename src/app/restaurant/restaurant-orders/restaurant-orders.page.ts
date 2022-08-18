import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.page.html',
  styleUrls: ['./restaurant-orders.page.scss'],
})
export class RestaurantOrdersPage implements OnInit {
  userDetails;
  orders: any = [];
  tabStatus = 'pending';
  constructor(
    public http: HttpClient,
    public dataService: DataService,
    public router: Router,
    public restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantService.getOrders();
  }
  ionViewWillEnter() {}

  statusToColor(status) {
    switch (status) {
      case 'pending':
        return 'success';
      case 'accepted':
        return 'secondary';
      case 'rejected':
        return 'primary';
      case 'completed':
        return 'secondary';

      default:
        break;
    }
  }
}
