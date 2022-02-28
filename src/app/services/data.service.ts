import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare const Swal: any;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  auth = {
    phone: '',
    otp: '',
    otpSent: false,
    email: '',
    fullName: '',
    canLoad: true,
  };
  profile: any = {
    id: 1,
  };
  domainUrl = 'http://localhost:1337/';
  apiUrl = this.domainUrl + 'api/';

  constructor(public router: Router) {
    this.syncProfileFromLs();
  }

  syncProfileFromLs() {
    const tempStringProfile = window.localStorage.getItem('effoProfile');
    if (tempStringProfile) {
      this.profile = JSON.parse(tempStringProfile);
      this.auth.canLoad = false;
    }
  }
  saveProfileObject(profile) {
    this.profile = profile;
    localStorage.setItem('effoProfile', JSON.stringify(profile));
  }
  swal(title, text, icon, timer = 4000) {
    const swalWithBootstrapButtons = Swal.mixin({});
    swalWithBootstrapButtons.fire({
      title,
      text,
      timer,
      icon,
    });
    // this.router.navigate(['/login']);
  }

  logout() {
    this.auth.canLoad = true;
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
