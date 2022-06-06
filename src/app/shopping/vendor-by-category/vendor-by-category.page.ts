import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';
import { ShopingAddCartModalPage } from './../modals/shoping-add-cart-modal/shoping-add-cart-modal.page';
import { DataService } from './../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import qs from 'qs';

@Component({
  selector: 'app-vendor-by-category',
  templateUrl: './vendor-by-category.page.html',
  styleUrls: ['./vendor-by-category.page.scss'],
})
export class VendorByCategoryPage implements OnInit {
  pageNo = 1;
  pageSize = 15;
  isLoadMore = true;  
  vendorList:any = [];
  title = '';
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public ds: DataService, public modalCtrl: ModalController, public cart: ShoppingCartService, public router: Router) {
    console.info(this.activatedRoute.snapshot.params.id)
  }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.params.name;
    this.getVendorByCategory();

  }

  getVendorByCategory(id?) {
    this.http.get(this.ds.apiUrl + 'shopping-categories', {
        params: {
          sort: ['createdAt:desc'],
          populate: '*',
          'filters[id][$eq]':this.activatedRoute.snapshot.params.id,
          'pagination[page]': this.pageNo,
          'pagination[pageSize]': this.pageSize
        },
      })
      .subscribe((data: any) => {
        this.vendorList = data.data;
        this.pageNo++;
      });
  }

  loadMore(ev){
    console.log(this.isLoadMore);
    if(!this.isLoadMore){
      return true;
    }else{
      this.http.get(this.ds.apiUrl + 'shopping-categories', {
        params: {
          sort: ['createdAt:desc'],
          populate: '*',
          'filters[id][$eq]':this.activatedRoute.snapshot.params.id,
          'pagination[page]': this.pageNo,
          'pagination[pageSize]': this.pageSize
        },
      })
        .subscribe((data: any) => {
          if (this.vendorList.length == data.meta.pagination.total) {
            this.isLoadMore = false;
          }
          if (data.data.length) {
            this.vendorList.push(...data.data);
          }
          if(ev){
            ev?.target?.complete();
          }
          this.pageNo++;
        });
    }
  }

  onSearchChange(ev){
    var text = ev.detail.value;
    this.pageNo = 1;
    const query = qs.stringify({
      populate: '*',
      pagination:{
        pageSize:10
      },
      filters: {
        author: {
          id: {
            $eq: this.activatedRoute.snapshot.params.id,
          }
        },
          $or: [
            {
              vendor:
              {
                fullName: {
                  $containsi: text,
                },
                city:{
                  $containsi: text
                }
              }
            }
          ],
      }
    });
    // console.log(decodeURIComponent(query))
    this.http.get(this.ds.apiUrl + 'shopping-categories', {
      params: {
        sort: ['createdAt:desc'],
        populate: '*',
        'filters[id][$eq]': this.activatedRoute.snapshot.params.id,
        'filters[vendor][fullName][$contains]':text,
        'pagination[page]': this.pageNo,
        'pagination[pageSize]': this.pageSize
      },
    })
    .subscribe((data: any) => {
      this.vendorList = data.data;
      this.pageNo++;
    });
  }

  getProductByVendor(vendor){
    console.log(vendor);
    this.cart.cartProducts = [];
    this.router.navigate(['shopping-vendor-menu/'+vendor?.attributes.vendor.data.id])
  }


  vendorDetials(vendorObj){
    console.log(vendorObj)
  }

  
  onImgError(event) {
    event.target.src = './assets/noProducts.jpg'
    //Do other stuff with the event.target
  }


}
