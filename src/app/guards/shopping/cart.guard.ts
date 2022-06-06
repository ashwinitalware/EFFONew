import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  constructor(public dataService: DataService, public router: Router, public cs: ShoppingCartService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.cs.cartProducts.length > 0){
        return true
      }else{
        this.router.navigate(['/shopping-dashboard/orders']);
        return false;
      }
  }
  



}
