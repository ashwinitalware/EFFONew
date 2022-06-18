import {
  DataService
} from 'src/app/services/data.service';
import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  NavController
} from '@ionic/angular';

import qs from 'qs';
@Component({
  selector: 'app-shopping-home',
  templateUrl: './shopping-home.page.html',
  styleUrls: ['./shopping-home.page.scss'],
})
export class ShoppingHomePage implements OnInit {
  notFound=false
  searchQuery = ''
  vendors = []
  showTitleSuggestions = false;
  showCitySuggesionts = false;
  titleSuggestions = [];
  selectedTitleSuggesion = '';
  citySuggestions = [];
  selectedCitySuggesion = '';
  sliceValue = 3;
  categories
  slides = [

    {
      url: 'assets/shopping/ad1.jpg'
    },
    {
      url: 'assets/shopping/ad2.jpg'
    },

  ]
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  constructor(public http: HttpClient, public ds: DataService, public router: Router, public navCtrl: NavController) {

    this.getVendors()

  }

  ngOnInit() {
    this.getAllShoppingCategories();
  }

  getAllShoppingCategories() {
    this.http.get(this.ds.apiUrl + 'shopping-categories')
      .subscribe((data: any) => {
        this.categories = data.data;
        this.categories?.forEach(cat => {
          cat.icon = 'close';
        });
      });
  }

  getVendorsByQuery(event){
    console.log(event);
    this.searchQuery=event
    this.getVendors()
    

  }
  categorySelected(catId, name) {
    this.router.navigate(['vendor-by-category/' + catId + '/' + name]);
    console.info("cat presssed")
    // this.navCtrl.navigateForward('shopping-vendor-listing')
  }

clear(){
  this.searchQuery=''
  this.getVendors()
}
  getVendors() {
    this.notFound=false

    const query = qs.stringify({
      filters: {
        companyName:{
          '$contains':this.searchQuery||''
        },
        vendor: {
          city: {
            // '$eq': 'pune'
          }
        }
      },
      populate: {
        vendor: {
          shoppingCategories: {
            populate: '*'
          },
        },
      },
    });
    this.http
      .get(this.ds.apiUrl + 'shopping-profiles?' + query, )
      .subscribe((data: any) => {
        this.vendors = data.data;
        if(data.data.length==0)
        this.notFound=true

      });
  }
}
