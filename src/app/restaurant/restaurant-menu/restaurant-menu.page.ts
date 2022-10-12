import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';
import { DataService } from './../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import qs from 'qs';
import { ShopingAddCartModalPage } from 'src/app/shopping/modals/shoping-add-cart-modal/shoping-add-cart-modal.page';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.page.html',
  styleUrls: ['./restaurant-menu.page.scss'],
})
export class RestaurantMenuPage implements OnInit {
  restaurantProfile;
  pageNo = 1;
  pageSize = 15;
  isLoadMore = true;
  vendorDetails: any;
  // eslint-disable-next-line max-len
  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public ds: DataService,
    public modalCtrl: ModalController,
    public cart: RestaurantService,
    public router: Router
  ) {
    console.log(this.activatedRoute.snapshot.params.id);
    this.getRestaurantProfile();
  }

  ngOnInit() {
    this.cart.shoppingProducts = [];
    this.getVendorShoppingProducts(this.activatedRoute.snapshot.params.id);
  }

  ionViewWillEnter() {
  }

  getVendorShoppingProducts(id: any) {
    this.http
      .get(this.ds.apiUrl + 'restaurant-foods', {
        params: {
          sort: ['createdAt:desc'],
          populate: '*',
          'filters[vendor][id][$eq]': id,
          'pagination[page]': this.pageNo,
          'pagination[pageSize]': this.pageSize,
        },
      })
      .subscribe((data: any) => {
        this.cart.shoppingProducts = data.data;
     
        this.cart.shoppingProducts?.forEach((prod) => {
          prod.quantity = 0;
          // if (prod?.attributes?.variations?.data?.length == 0) {
          prod.isVariationAvailable = false;
          // prod.price = 50;
          // } else {
          //   prod.isVariationAvailable = true;
          //   prod.price = prod?.attributes?.variations.data[0]?.attributes?.price;
          // }
        });
        this.pageNo++;
      });
  }

  loadMore(ev) {
    console.log(this.isLoadMore);
    if (!this.isLoadMore) {
      ev?.target?.complete();
      return true;
    } else {
      this.http
        .get(this.ds.apiUrl + 'restaurant-foods', {
          params: {
            sort: ['createdAt:desc'],
            populate: '*',
            'filters[vendor][id][$eq]': this.activatedRoute.snapshot.params.id,
            'pagination[page]': this.pageNo,
            'pagination[pageSize]': this.pageSize,
          },
        })
        .subscribe(
          (data: any) => {
            if (
              this.cart.shoppingProducts.length == data.meta.pagination.total
            ) {
              this.isLoadMore = false;
            }
            if (data.data.length) {
              this.cart.shoppingProducts.push(...data.data);
              this.cart.shoppingProducts?.forEach((prod) => {
                prod.quantity = 0;
                // if (prod?.attributes?.variations?.data?.length == 0) {
                prod.isVariationAvailable = false;
                // prod.price = 50;
                // } else {
                //   prod.isVariationAvailable = true;
                //   prod.price = prod?.attributes?.variations.data[0]?.attributes?.price;
                // }
              });
            }
            ev?.target?.complete();
            this.pageNo++;
          },
          (err) => {
            ev?.target?.complete();
          }
        );
    }
  }

  onImgError(event) {
    event.target.src = './assets/noProducts.jpg';
    //Do other stuff with the event.target
  }

  async addToCart(product, i) {
    console.log(product);
    if (product?.attributes?.variations?.data?.length > 0) {
      const modal = await this.modalCtrl.create({
        component: ShopingAddCartModalPage,
        cssClass: 'add-shopping-cart',
        componentProps: {
          productObj: product,
        },
      });
      modal.onDidDismiss().then((data) => {
        const variation = data['data']; // Here's your selected variation!
        console.log(variation);

        if (variation == undefined) return false;

        this.cart.shoppingProducts.forEach((prod) => {
          if (prod?.id == variation.productId) {
            prod.isVariationAvailable = false;
            prod.quantity += 1;
            prod.baseValue = variation?.variationPrice;
            prod.variationId = variation?.variationId;
            // prod.price = variation?.variationPrice * prod.quantity;
          }
        });

        if (this.cart.cartProducts.length == 0) {
          this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
        } else {
          var isProductAdded = this.cart.cartProducts.find((x) => {
            return x.id == product?.id;
          });

          if (isProductAdded) {
            this.cart.cartProducts.forEach((prod) => {
              if (prod.id == product.id) {
                prod = this.cart.shoppingProducts[i];
                return;
              }
            });
          } else {
            this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
          }
        }
        // else{
        //     this.cart.cartProducts.forEach(prod => {
        //       if(prod.id == product.id){
        //       prod.quantity++;
        //       product.selectedItem.variationId = variation?.variationId;
        //       product.selectedItem.price = variation?.variationPrice * product.selectedItem.quantity;
        //       }
        //     });
        // }
        console.log(this.cart.shoppingProducts);
      });
      return await modal.present();
    } else {
    }
  }

  remove(product, i) {
    this.cart.shoppingProducts.forEach((prod) => {
      if (prod.id == product.id) {
        if (prod?.quantity != 0) {
          prod.quantity--;
          if (prod.quantity == 0) {
            if (prod?.attributes?.variations?.data?.length > 0) {
              prod.isVariationAvailable = true;
            }
            // prod.price = (prod?.baseValue == undefined ? 50 : prod?.baseValue);
            prod.price = product.attributes.price;
            var index = this.cart.cartProducts?.findIndex(
              (x) => x.id == prod.id
            );
            if (index != -1) {
              this.cart.cartProducts.splice(index, 1);
            }
            console.log(index);
          } else {
            // prod.price = prod.price - (prod?.baseValue == undefined ? 50 : prod?.baseValue);
            prod.price = product.attributes.price;
            this.cart.cartProducts.forEach((cartProd) => {
              if (prod.id == product.id) {
                cartProd = this.cart.shoppingProducts[i];
                return;
              }
            });
          }
        } else {
          // item removed completely
        }
      }
    });
    console.log(this.cart.cartProducts);
  }

  add(product, i) {
    this.cart.shoppingProducts.forEach((prod) => {
      if (prod.id == product.id) {
        prod.quantity++;
        // prod.price = (prod?.baseValue == undefined ? 50 : prod?.baseValue) * prod.quantity;
        prod.price = product.attributes.price;
      }
    });

    if (this.cart.cartProducts.length == 0) {
      this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
    } else {
      var isProductAdded = this.cart.cartProducts.find((x) => {
        return x.id == product?.id;
      });

      if (isProductAdded) {
        this.cart.cartProducts.forEach((prod) => {
          if (prod.id == product.id) {
            prod = this.cart.shoppingProducts[i];
            return;
          }
        });
      } else {
        this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
      }
    }
    console.log(this.cart.cartProducts);
  }

  goToCartPage() {
    this.router.navigateByUrl(
      'restaurant-cart/' + this.activatedRoute.snapshot.params.id
    );
  }

  getRestaurantProfile() {
    let query = qs.stringify({
      populate: '*',
      filters: {
        vendor: {
          id: {
            $eq: this.activatedRoute.snapshot.params.id,
          },
        },
      },
    });

    this.http
      .get(this.ds.apiUrl + 'restaurant-profiles?' + query, {})
      .subscribe((data: any) => {
        this.restaurantProfile = data.data[0];
          this.vendorDetails =
            data.data[0]?.attributes?.vendor?.data?.attributes;
          // console.log(this.vendorDetails)
       
      });
  }
}
