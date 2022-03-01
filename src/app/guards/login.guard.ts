import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(public dataService: DataService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.dataService.auth.canLoad) {
      // this.router.navigateByUrl('/login');
      return true;
    } else {
      // this.router.navigateByUrl('/dashboard');
      return false;
      // this.router.navigate(['/dashboard']);
    }

    // return this.dataService.auth.canLoad;
    // return true;
  }
}
