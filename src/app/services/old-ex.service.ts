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


  filters = {
    city: "",
    category: ""
  }

  products = []
  categories = []
  myProducts = []

  constructor(public dataService: DataService) {

  }

  getProducts(clear = false) {


    let query = qs.stringify({
      populate: '*',
      

      

    })
    this.dataService._get('oldex-products', query).subscribe(data => {
      if (data.data)
      if (clear)
        this.products = data.data
    else
      this.products.push(data.data)

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
      user: {
        id: {
          $eq: this.dataService.profile.id
        }
      }
    })
    this.dataService._get('oldex-products', query).subscribe(data => {
      if (data.data)
        this.myProducts = data.data

    })
  }

}
