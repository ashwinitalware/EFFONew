import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';
import { ShopingAddCartModalPage } from './../modals/shoping-add-cart-modal/shoping-add-cart-modal.page';
import { DataService } from './../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {   
  shoppingProducts;
  total = 0;
  grandTotal = 0;
  discount = 0;
  address = '';
  userDetails;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public ds: DataService, public modalCtrl: ModalController, public cart: ShoppingCartService, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    var data = localStorage.getItem('effoProfile');
    this.userDetails = JSON.parse(data);
    console.log(this.userDetails);
    this.cart.cartProducts.forEach(cartProd => {
      this.total += cartProd?.price;
      this.grandTotal += cartProd?.price;
    });
  }
  onImgError(event) {
    event.target.src = './assets/noProducts.jpg'
    //Do other stuff with the event.target
  }

  // async addToCart(product, i) {
  //   console.log(product);
  //   if (product?.attributes?.variations?.data?.length > 0) {
  //     const modal = await this.modalCtrl.create({
  //       component: ShopingAddCartModalPage,
  //       cssClass: 'add-shopping-cart',
  //       componentProps: {
  //         productObj: product
  //       }
  //     });
  //     modal.onDidDismiss().then((data) => {
  //       const variation = data['data']; // Here's your selected variation!
  //       console.log(variation);

  //       if (variation == undefined) return false;

  //       this.shoppingProducts.forEach(prod => {
  //         if (prod?.id == variation.productId) {
  //           prod.isVariationAvailable = false;
  //           prod.quantity += 1;
  //           prod.baseValue = variation?.variationPrice;
  //           prod.variationId = variation?.variationId;
  //           prod.price = variation?.variationPrice * prod.quantity;
  //         }
  //       });

  //       if (this.cart.cartProducts.length == 0) {
  //         this.cart.cartProducts.push(this.shoppingProducts[i]);
  //       } else {
  //         var isProductAdded = this.cart.cartProducts.find((x) => {
  //           return x.id == product?.id
  //         })

  //         if (isProductAdded) {
  //           this.cart.cartProducts.forEach(prod => {
  //             if (prod.id == product.id) {
  //               prod = this.shoppingProducts[i];
  //               return;
  //             }
  //           });
  //         } else {
  //           this.cart.cartProducts.push(this.shoppingProducts[i]);
  //         }
  //       }
  //       // else{
  //       //     this.cart.cartProducts.forEach(prod => {
  //       //       if(prod.id == product.id){
  //       //       prod.quantity++;
  //       //       product.selectedItem.variationId = variation?.variationId;
  //       //       product.selectedItem.price = variation?.variationPrice * product.selectedItem.quantity;
  //       //       }
  //       //     });
  //       // }      
  //       console.log(this.shoppingProducts);
  //     });
  //     return await modal.present();
  //   } else {
  //   }
  // }

  remove(product, i) {
    this.cart.cartProducts.forEach(prod => {
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
            // this.cart.cartProducts.forEach(cartProd => {
            //   if (prod.id == product.id) {
            //     cartProd = this.shoppingProducts[i];
            //     return;
            //   }
            // });
          }
        } else {
          // item removed completely
        }
      }
    });

    if(this.cart.cartProducts.length == 0){
      this.navCtrl.back();
    }
    console.log(this.cart.cartProducts);
  }

  add(product, i) {
    this.cart.cartProducts.forEach(prod => {
      if (prod.id == product.id) {
        prod.quantity++;
        prod.price = (prod?.baseValue == undefined ? 50 : prod?.baseValue) * prod.quantity;
      }
    });

    // if (this.cart.cartProducts.length == 0) {
    //   this.cart.cartProducts.push(this.shoppingProducts[i]);
    // } else {
    //   var isProductAdded = this.cart.cartProducts.find((x) => {
    //     return x.id == product?.id
    //   })

    //   if (isProductAdded) {
    //     this.cart.cartProducts.forEach(prod => {
    //       if (prod.id == product.id) {
    //         prod = this.shoppingProducts[i];
    //         return;
    //       }
    //     });
    //   } else {
    //     this.cart.cartProducts.push(this.shoppingProducts[i]);
    //   }
    // }
    console.log(this.cart.cartProducts)
  }

  goToCartPage() {
    // this.router.navigateByUrl('shopping-cart');
  }

  ionViewWillLeave(){
    if(this.cart.cartProducts.length > 0){
      this.cart.shoppingProducts.forEach(prod => {
        if (this.cart.cartProducts.length) {
          this.cart.cartProducts.forEach(cartProd => {
            if (prod.id == cartProd.id) {
              prod = cartProd;
            }
          });
        }
      });
    }else{
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
    console.log('leaving cart page')
  }
  

  placeOrder(){
    if(this.address == '' || this.address == undefined){
      return this.ds.presentToast('Please enter address first.');
    }
    var payload = {
      user: this.userDetails?.id,
      vendor: parseInt(this.activatedRoute.snapshot.params.vendorId),
      total: this.grandTotal,
      address: this.address,
      discount: this.discount,
      delivery: 0,
      status: 'pending',

    };
    console.log(payload);
    this.ds.present();
    this.http.post(this.ds.apiUrl+'shopping-orders', {data: payload}).subscribe((res:any) =>{
      console.log(res);
      if(res.data){
        var orderId = res?.data.id;
        var count = 0;
        this.cart.cartProducts.forEach((cartPRod, i) => {
          setTimeout(() => {
            this.http.post(this.ds.apiUrl + 'shopping-order-products', { data: {
              quantity: cartPRod?.quantity,
              variation: cartPRod?.variationId,
              order: orderId,
              price: cartPRod?.price,
              productName: cartPRod?.attributes?.name
            } }).subscribe((res: any) => {
              console.log(res);
              if (this.cart.cartProducts.length == (i + 1)) {
                this.router.navigate(['shopping-dashboard/orders']);
                this.cart.cartProducts = [];
                this.ds.dismiss();
                return this.ds.presentToast('Order place successfully.');
              }
            }, e =>{
              this.ds.dismiss();
            });
          }, 10 * (i + 1));
        });
      }
    }, e => {
      this.ds.dismiss();
    })
  }
}
