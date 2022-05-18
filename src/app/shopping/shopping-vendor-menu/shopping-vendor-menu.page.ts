import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';
import { ShopingAddCartModalPage } from './../modals/shoping-add-cart-modal/shoping-add-cart-modal.page';
import { DataService } from './../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-vendor-menu',
  templateUrl: './shopping-vendor-menu.page.html',
  styleUrls: ['./shopping-vendor-menu.page.scss'],
})
export class ShoppingVendorMenuPage implements OnInit {
  pageNo = 1;
  pageSize = 15;
  isLoadMore = true;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public ds: DataService, public modalCtrl: ModalController, public cart: ShoppingCartService, public router: Router) {
    console.info(this.activatedRoute.snapshot.params.id)
  }

  ngOnInit() {
    this.cart.shoppingProducts = [];
    this.getVendorShoppingProducts(this.activatedRoute.snapshot.params.id)
  }

  ionViewWillEnter(){
    // console.log(this.cart.shoppingProducts)
  }

  getVendorShoppingProducts(id: any) {
    this.http.get(this.ds.apiUrl + 'shopping-products', {
        params: {
          populate: '*',
          'filters[vendor][id][$eq]':id,
          'pagination[page]': this.pageNo,
          'pagination[pageSize]': this.pageSize
        },
      })
      .subscribe((data: any) => {
        this.cart.shoppingProducts = data.data;
        this.cart.shoppingProducts?.forEach(prod => {
          prod.quantity = 0;
          if (prod?.attributes?.variations?.data?.length == 0) {
            prod.isVariationAvailable = false
            prod.price = 50;
          } else {
            prod.isVariationAvailable = true;
            prod.price = prod?.attributes?.variations.data[0]?.attributes?.price;
          }
        });
        this.pageNo++;
      });
  }

  loadMore(ev){
    console.log(this.isLoadMore);
    if(!this.isLoadMore){
      return true;
    }else{
      this.http.get(this.ds.apiUrl + 'shopping-products', {
        params: {
          populate: '*',
          'filters[vendor][id][$eq]': this.activatedRoute.snapshot.params.id,
          'pagination[page]': this.pageNo,
          'pagination[pageSize]': this.pageSize
        },
      })
        .subscribe((data: any) => {
          if (this.cart.shoppingProducts.length == data.meta.pagination.total) {
            this.isLoadMore = false;
          }
          if (data.data.length) {
            this.cart.shoppingProducts.push(...data.data);
            this.cart.shoppingProducts?.forEach(prod => {
              prod.quantity = 0;
              if (prod?.attributes?.variations?.data?.length == 0) {
                prod.isVariationAvailable = false
                prod.price = 50;
              } else {
                prod.isVariationAvailable = true;
                prod.price = prod?.attributes?.variations.data[0]?.attributes?.price;
              }
            });
          }
          ev?.target?.complete();
          this.pageNo++;
        });
    }

    
  }

  onImgError(event) {
    event.target.src = './assets/noProducts.jpg'
    //Do other stuff with the event.target
  }

  async addToCart(product, i) {
    console.log(product);
    if (product?.attributes?.variations?.data?.length > 0) {
      const modal = await this.modalCtrl.create({
        component: ShopingAddCartModalPage,
        cssClass: 'add-shopping-cart',
        componentProps: {
          productObj: product
        }
      });
      modal.onDidDismiss().then((data) => {
        const variation = data['data']; // Here's your selected variation!
        console.log(variation);

        if (variation == undefined) return false;

        this.cart.shoppingProducts.forEach(prod => {
          if (prod?.id == variation.productId) {
            prod.isVariationAvailable = false;
            prod.quantity += 1;
            prod.baseValue = variation?.variationPrice;
            prod.variationId = variation?.variationId;
            prod.price = variation?.variationPrice * prod.quantity;
          }
        });

        if (this.cart.cartProducts.length == 0) {
          this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
        } else {
          var isProductAdded = this.cart.cartProducts.find((x) => {
            return x.id == product?.id
          })

          if (isProductAdded) {
            this.cart.cartProducts.forEach(prod => {
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
    this.cart.shoppingProducts.forEach(prod => {
      if (prod.id == product.id) {
        if (prod?.quantity != 0) {
          prod.quantity--;
          if (prod.quantity == 0) {
            if (prod?.attributes?.variations?.data?.length > 0) {
              prod.isVariationAvailable = true;
            }
            prod.price = (prod?.baseValue == undefined ? 50 : prod?.baseValue);
            var index = this.cart.cartProducts?.findIndex(x => x.id == prod.id);
            if (index != -1) {
              this.cart.cartProducts.splice(index, 1);
            }
            console.log(index);
          } else {
            prod.price = prod.price - (prod?.baseValue == undefined ? 50 : prod?.baseValue);
            this.cart.cartProducts.forEach(cartProd => {
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
    this.cart.shoppingProducts.forEach(prod => {
      if (prod.id == product.id) {
        prod.quantity++;
        prod.price = (prod?.baseValue == undefined ? 50 : prod?.baseValue) * prod.quantity;
      }
    });

    if (this.cart.cartProducts.length == 0) {
      this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
    } else {
      var isProductAdded = this.cart.cartProducts.find((x) => {
        return x.id == product?.id
      })

      if (isProductAdded) {
        this.cart.cartProducts.forEach(prod => {
          if (prod.id == product.id) {
            prod = this.cart.shoppingProducts[i];
            return;
          }
        });
      } else {
        this.cart.cartProducts.push(this.cart.shoppingProducts[i]);
      }
    }
    console.log(this.cart.cartProducts)
  }

  goToCartPage(){
    this.router.navigateByUrl('shopping-cart/' + this.activatedRoute.snapshot.params.id);
  }


}
