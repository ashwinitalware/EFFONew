import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';

@Component({
  selector: 'app-shoping-add-cart-modal',
  templateUrl: './shoping-add-cart-modal.page.html',
  styleUrls: ['./shoping-add-cart-modal.page.scss'],
})
export class ShopingAddCartModalPage implements OnInit {
 @Input() productObj: any;
 public variations:any = [];
 public price = 0;
  constructor(public modalCtrl: ModalController, public cart: ShoppingCartService) { 
    
  }

  ngOnInit() {
    console.log(this.productObj);
    this.variations = this.productObj?.attributes?.variations?.data;
    this.variations.forEach((variation, i) => {
      // if(i == 0){
      //   variation.selected = true;
      //   this.price = variation?.attributes?.price;
      // }else{
      //   variation.selected = false;
      // }
    });
    console.log(this.variations)
  }

    onImgError(event){
    event.target.src = '../../../../assets/noProducts.jpg'
  //Do other stuff with the event.target
  }

  selectedSize(variation, i){
    this.variations.forEach((variation, ii) => {
      if(ii == i){
        variation.selected = true;
        this.price = variation?.attributes?.price;
        this.modalCtrl.dismiss({variationId: variation?.id, variationPrice: variation?.attributes?.price, productId: this.productObj?.id});
      }else{
        variation.selected = false;
      }
    });
    console.log(this.variations)
  }

  addToCart(){

  }

  removeFromCart(){

  }


}
