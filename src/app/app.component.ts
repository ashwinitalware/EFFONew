import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('fileUpload') fileUpload: ElementRef;
  @ViewChild('fileUploadCamera') fileUploadCamera: ElementRef;
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
      this.platform.backButton.subscribeWithPriority(-1, () => {
        if (
          (window.location + '').includes('localhost/dashboard') ||
          (window.location + '').includes(
            'localhost' + this.dataService.directNavigate
          ) ||
          (window.location + '').includes('localhost/login')
        ) {
          App.exitApp();
        }
      });
      // App.addListener('backButton', () => {
      //   if (
      //     (window.location + '').includes('localhost/dashboard') ||
      //     (window.location + '').includes(
      //       'localhost' + this.dataService.directNavigate
      //     ) ||
      //     (window.location + '').includes('localhost/login')
      //   )
      //     App.exitApp();
      //   else if (
      //     (window.location + '').includes('localhost/service-dashboard') ||
      //     (window.location + '').includes('localhost/jobdashboard') ||
      //     (window.location + '').includes('localhost/cab-tabs')
      //   ) {
      //     this.navCtrl.pop();
      //   } else {
      //     // alert(window.location)

      //     this.navCtrl.back();
      //   }

      //   try {
      //     this.dataService.dismiss();
      //   } catch (error) {}
      // });

      try {
        AppUpdate.getAppUpdateInfo().then((data) => {
          console.log('UPDATE INFO');
          if (
            data.updateAvailability == AppUpdateAvailability.UPDATE_AVAILABLE
          ) {
            // this.dataService.presentToast('Update Available');
            if (data.flexibleUpdateAllowed) {
              AppUpdate.startFlexibleUpdate();
            }
            if (data.immediateUpdateAllowed) {
              AppUpdate.performImmediateUpdate();
            }
          }
        });
      } catch (error) {}
    });
  }

  capture() {
    this.dataService.capture(this.fileUpload, this.fileUploadCamera);
  }
  businessRegistration() {}

  edit() {
    this.dataService.menu.close();
    this.router.navigate(['/editprofile']);
  }
  itemClicked(item) {
    this.dataService.menu.close();
    // if (item.role == 'home') this.router.navigate(['/dashboard']);
    if (item.role == 'home')
      this.router.navigate(['' + this.dataService.directNavigate]);
    if (item.role == 'privacy') this.router.navigate(['/privacypolicy']);
    if (item.role == 'contact') this.router.navigate(['/contactus']);
    if (item.role == 'share') {
      this.dataService.share(
        'Download ' + this.dataService.appName + ' App',
        this.dataService.shareContent,
        this.dataService.playStoreLinks.customer
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
      window.open(this.dataService.playStoreLinks.vendor, '_system');
    }
    if (item.role == 'rate') {
      // RateApp.requestReview()
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      window.open(this.dataService.playStoreLinks.customer, '_system');
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
