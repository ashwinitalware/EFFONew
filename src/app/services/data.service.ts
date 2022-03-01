import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
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
  // profile: any = {
  //   // id: 1,
  // };
  profile: any;
  domainUrl = 'http://localhost:1337/';
  apiUrl = this.domainUrl + 'api/';
  isLoading = false;
  constructor(public router: Router, public loadingCtrl: LoadingController) {
    this.domainUrl =
      'http://effo-env.eba-cuy23cbc.ap-south-1.elasticbeanstalk.com/';
    this.apiUrl = this.domainUrl + 'api/';
    this.syncProfileFromLs();
  }
  async present(content = 'Loading Data...') {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        message: content,
        // duration: 5000,
      })
      .then((a) => {
        a.present().then(() => {
          console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async dismiss() {
    try {
      this.isLoading = false;
      return await this.loadingCtrl
        .dismiss()
        .then(() => console.log('dismissed'));
    } catch (error) {}
  }
  syncProfileFromLs() {
    const tempStringProfile = window.localStorage.getItem('effoProfile');
    if (tempStringProfile) {
      this.profile = JSON.parse(tempStringProfile);
      // this.auth.canLoad = false;
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
