import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  DataService
} from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(public dataService: DataService, public router: Router) {}
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
    |
    Observable < boolean | UrlTree >
    |
    Promise < boolean | UrlTree >
    |
    boolean |
    UrlTree {


      console.log('guard', route);
      if (route.routeConfig.path == 'dashboard') {

        const tempStringProfile = window.localStorage.getItem(this.dataService.localStorageName);
        if (tempStringProfile) {
          this.dataService.profile = JSON.parse(tempStringProfile);
          return true
          // this.auth.canLoad = false;
        } else {
          this.router.navigate(['/login']);
          return false

        }

      } else if (route.routeConfig.path == 'login') {

        return true;
        try {
          // throw 'err'
     
        const tempStringProfile = window.localStorage.getItem(this.dataService.localStorageName);
        if (tempStringProfile) {
          this.dataService.profile = JSON.parse(tempStringProfile);
        } 
        if (this.dataService.profile) {
          // alert(this.dataService.directNavigate)
          this.router.navigateByUrl('/dashboard');
          // this.router.navigateByUrl('/jobdashboard/home');
          // this.router.navigateByUrl(this.dataService.directNavigate);
          // this.router.navigate([this.dataService.directNavigate])
          // this.router.navigate([this.dataService.directNavigate])
          return false
        } else {
          return true;
        }

             
      } catch (error) {
        alert('Error auto login...')
        return true;
      }

      }
      // return this.dataService.auth.canLoad;
      // return true;
    }
}
