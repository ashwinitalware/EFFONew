import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {
    // this.navCtrl.navigateRoot(['/dashboard']);
    this.autoLogin();
  }

  ngOnInit() {}

  autoLogin() {
    // alert(this.dataService.profile);
    if (this.dataService.profile) {
      this.dataService.auth.canLoad = false;
      this.navCtrl.navigateForward(['/dashboard']);
    }
  }

  login() {
    const newPhone = this.dataService.auth.phone + '';
    if (newPhone.length != 10) {
      return this.dataService.swal(
        'Invalid Phone Number',
        'Enter 10 digit phone number',
        'error'
      );
    }
    this.http
      .get(this.dataService.apiUrl + 'custom/login', {
        params: {
          phone: this.dataService.auth.phone + '',
        },
      })
      .subscribe((data) => {
        this.dataService.auth.otpSent = true;
      });
  }
  resend() {
    this.dataService.presentToast('OTP Sent Successfully !');
    // this.dataService.swal('OTP Resend', '', 'success');
  }
  verify() {
    this.http
      .get(this.dataService.apiUrl + 'custom/verify', {
        params: {
          phone: this.dataService.auth.phone,
          otp: this.dataService.auth.otp,
        },
      })
      .subscribe((data: any) => {
        if (data.profile) {
          this.dataService.profile = data.profile;

          localStorage.setItem('effoProfile', JSON.stringify(data.profile));
          this.dataService.auth.canLoad = false;
          if (
            !data.profile.fullName ||
            data.profile.email == 'email@gmail.com' ||
            !data.profile.city
          ) {
            this.navCtrl.navigateForward(['/editprofile']);
          } else {
            this.navCtrl.navigateRoot(['/dashboard']);
            // this.navCtrl.navigateForward(['/dashboard']);
          }
        }
        if (data.status == false) {
          this.dataService.swal(
            'Wrong OTP',
            'Please type the correct OTP',
            'error'
          );
        }
      });
  }
  changePhone() {
    this.dataService.auth.otpSent = false;
    this.dataService.auth.otp = undefined;
  }
  google() {
    this.dataService.swal('Coming Soon..', '', 'warning');
  }
}
