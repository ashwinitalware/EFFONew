import {
  Injectable
} from '@angular/core';
import {
  DataService
} from './data.service';

import qs from 'qs'
@Injectable({
  providedIn: 'root'
})
export class OldExService {

  notFound = false
  filters = {
    query:'',
    currentPage: 1,
    city: "",
    category: ""
  }

  products = []
  categories = []
  myProducts = []
  newNearbyProducts = []

  constructor(public dataService: DataService) {

  }

  getProducts(pager = undefined, firstTime = true) {

    if (firstTime) {
      this.filters.currentPage = 1;
    }
    this.notFound = false;

    if (firstTime) {
      this.products = [];
    }
    if (pager) {
      pager.target.complete();
    }

    let queryObj: any = {
      sort: ['createdAt:desc'],
      pagination: {
        page: this.filters.currentPage++,
        pageSize: '5',
      },
      filters: {
        city: {
          $contains: this.filters.city
        },
      },
      populate: '*',





    }
    if (this.filters.category) {
      queryObj.filters.category = {
        id: {
          $eq: this.filters.category
        }
      }
    }
    if (this.filters.query) {
      queryObj.filters.title = {
       
          $contains: this.filters.query
       
      }
    }

    let query = qs.stringify(queryObj)

    this.dataService._get('oldex-products', query).subscribe(data => {
      if (data.data)
        if (firstTime)
          this.products = data.data
      else
        this.products.push(...data.data)

      if (!this.products.length && !data.data.length)
        this.notFound = true

    })



    this.dataService._get('oldex-categories', {

    }).subscribe(data => {

    })
  }

  getCategories() {
    this.dataService._get('oldex-categories', {

    }).subscribe(data => {
      if (data.data)
        this.categories = data.data

    })

  }

  getMyProducts() {
    let query = qs.stringify({
      populate: '*',
      filters: {
        user: {
          id: {
            $eq: this.dataService.profile.id
          }
        }
      }
    })
    this.dataService._get('oldex-products', query).subscribe(data => {
      if (data.data)
        this.myProducts = data.data

    })
  }
  getNearbyProducts() {
    let query = qs.stringify({
      sort: ['createdAt:desc'],
      populate: '*',
      pagination:{
        pageSize:10
      },
      filters:{
        city:{
          $eq:
            this.dataService.profile.city
          
        }
      }
   
    })
    this.dataService._get('oldex-products', query).subscribe(data => {
      if (data.data)
        this.newNearbyProducts = data.data

    })
  }

}
