import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public cartProducts:any = [];
  public shoppingProducts: any = [];
  constructor() { }
}
