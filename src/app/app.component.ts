import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { DataService } from './services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';
import {
  AppUpdate,
  AppUpdateAvailability,
} from '@robingenz/capacitor-app-update';
import { FCM } from '@capacitor-community/fcm';
import { PushNotifications } from '@capacitor/push-notifications';
import { RateApp } from 'capacitor-rate-app';
import { App } from '@capacitor/app';

// import { PushNotifications } from "@capacitor/push-notifications";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  version = '0.0.1';
  fileToUpload: File | null = null;

  constructor(
    private router: Router,
    public platform: Platform,
    public iab: InAppBrowser,
    public dataService: DataService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {
    this.getAppVersion();
    this.initializeApp();
    console.log(this.dataService.profile);
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      App.addListener('backButton', () => {
        if (
          (window.location + '').includes('localhost/dashboard') ||
          (window.location + '').includes('localhost/login')
        )
          App.exitApp();
        else this.navCtrl.back();

        try {
          this.dataService.dismiss();
        } catch (error) {}
      });
      //     FCM.subscribeTo({ topic: "test123" })
      // .then((r) => alert(`subscribed to topic`))
      // .catch((err) => console.log(err));

      // try {
      //   alert('getAppUpdateInfo' + JSON.stringify(result));
      // } catch (error) {
      //   alert('catch getAppUpdateInfo' + result);
      // }
      AppUpdate.getAppUpdateInfo().then((data) => {
        console.log('UPDATE INFO');
        if (data.updateAvailability == AppUpdateAvailability.UPDATE_AVAILABLE) {
          // this.dataService.presentToast('Update Available');
          if (data.flexibleUpdateAllowed) {
            AppUpdate.startFlexibleUpdate();
          }
          if (data.immediateUpdateAllowed) {
            AppUpdate.performImmediateUpdate();
          }
        }
      });
    });
  }

  businessRegistration() {}

  edit() {
    this.dataService.menu.close();
    this.router.navigate(['/editprofile']);
  }
  itemClicked(item) {
    this.dataService.menu.close();
    if (item.role == 'home') this.router.navigate(['/dashboard']);
    if (item.role == 'privacy') this.router.navigate(['/privacypolicy']);
    if (item.role == 'contact') this.router.navigate(['/contactus']);
    if (item.role == 'share') {
      this.dataService.share(
        'Download Effo App',
        'You will get all information about home appliances repairing, Beauty parlor, cab services, contractor, consultants, events, catering service, vehicle service, photography, mandap, Hall /lawns, classes, school, college, tours and travels, washing center, school bus, and other huge services.',
        'https://play.google.com/store/apps/details?id=ionic.effo.starter'
      );

      // navigator.share({
      //   title: 'Download Effo App',
      //   // eslint-disable-next-line max-len
      //   text: 'You will get all information about home appliances repairing, Beauty parlor, cab services, contractor, consultants, events, catering service, vehicle service, photography, mandap, Hall /lawns, classes, school, college, tours and travels, washing center, school bus, and other huge services.',
      //   url: 'https://play.google.com/store/apps/details?id=ionic.effo.starter',
      // });
    }
    if (item.role == 'logout') this.dataService.logout();
    if (item.role == 'business') {
      // window.open(
      //   `https://play.google.com/store/apps/details?id=io.effo.vendor`
      // );
      window.open(
        'https://play.google.com/store/apps/details?id=io.effo.vendor',
        '_system'
      );
    }
    if (item.role == 'rate') {
      // RateApp.requestReview()
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      window.open(
        'https://play.google.com/store/apps/details?id=ionic.effo.starter',
        '_system'
      );
    }
  }
  handleFileInput(files: any) {
    this.fileToUpload = files.target.files.item(0);
    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('files', this.fileToUpload, this.fileToUpload.name);
    this.dataService.present();
    return this.http
      .post(this.dataService.apiUrl + 'upload', formData)
      .subscribe((data: any) => {
        this.http
          .put(
            this.dataService.apiUrl + 'users/' + this.dataService.profile.id,
            {
              profileImage: data[0].url,
            }
          )
          .subscribe(
            (data2: any) => {
              this.dataService.dismiss();
              this.dataService.presentToast('Image Updated');
              this.dataService.saveProfileObject(data2);
              // this.dataService.profile.profileImage = data2.profileImage;
            },
            (err) => {
              this.dataService.dismiss();
            }
          );
      });
  }

  getAppVersion() {
    App.getInfo().then((data) => {
      this.version = data.version;
    });
  }
}
