import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever/ngx';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hash: any = 'hash';

  // smsPromise: Promise<string>;
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public navCtrl: NavController,
    public smsRetriever: SmsRetriever
  ) {
    // this.navCtrl.navigateRoot(['/dashboard']);

    // this.autoLogin();

    this.smsRetriever
      .getAppHash()
      .then((res: any) => {
        if (res) this.hash = res;
        // console.log(res);
        // alert(res);
      })
      .catch((error: any) => console.error(error));
    this.smsRetriever
      .startWatching()
      .then((res: any) => {
        console.log(res);

        if (res.Message) {
          this.dataService.auth.otp = res.Message.slice(12, 16);

          this.verify();
        }
      })
      .catch((error: any) => console.error(error));
  }

  ngOnInit() {}

  // autoLogin() {
  //   this.dataService.present('Syncing Profile...', 200);
  //   // alert(this.dataService.profile);
  //   if (this.dataService.profile) {
  //     // this.dataService.auth.canLoad = false;
  //     this.navCtrl.navigateForward(['/dashboard']);
  //   } else {
  //   }
  // }

  login() {
    const newPhone = this.dataService.auth.phone + '';

    if (newPhone.length != 10) {
      return this.dataService.presentToast(
        'Invalid Phone Number',

        'danger'
      );
    }
    this.dataService.present();
    this.http
      .get(this.dataService.apiUrl + 'custom/login', {
        params: {
          phone: this.dataService.auth.phone + '',
          hash: this.hash + '' || 'hash74584',
        },
      })
      .subscribe(
        (data) => {
          this.dataService.dismiss();
          this.dataService.auth.otpSent = true;
        },
        (err) => {
          this.dataService.dismiss();
        }
      );
  }
  resend() {
    this.dataService.presentToast('OTP Sent Successfully !');
  }
  verify() {
    this.dataService.present();
    this.http
      .get(this.dataService.apiUrl + 'custom/verify', {
        params: {
          phone: this.dataService.auth.phone,
          otp: this.dataService.auth.otp,
        },
      })
      .subscribe(
        (data: any) => {
          this.dataService.dismiss();
          if (data.profile) {
            this.dataService.profile = data.profile;

            localStorage.setItem('effoProfile', JSON.stringify(data.profile));
            // this.dataService.auth.canLoad = false;
            if (
              !data.profile.fullName ||
              data.profile.email == 'email@gmail.com' ||
              !data.profile.city
            ) {
              this.navCtrl.navigateForward(['/editprofile']);
            } else {
              this.navCtrl.navigateForward(['/dashboard']);
              // this.navCtrl.navigateForward(['/dashboard']);
            }
          }
          if (data.status == false) {
            this.dataService.presentToast('Wrong OTP', 'danger');
          }
        },
        (err) => {
          this.dataService.dismiss();
        }
      );
  }
  changePhone() {
    this.dataService.auth.otpSent = false;
    this.dataService.auth.otp = undefined;
  }
  google() {
    this.dataService.presentToast('Coming Soon..', 'danger');
  }
  
   ionViewDidEnter(){
setTimeout(async() => {
  
  await SplashScreen.hide()
}, 100);
  }
}
