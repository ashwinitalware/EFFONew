import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  isPlatform,
  LoadingController,
  MenuController,
} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { HttpClient } from '@angular/common/http';
import { AppUpdate } from '@robingenz/capacitor-app-update';
// import { FCM } from '@capacitor-community/fcm';
import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Observable } from 'rxjs';
import qs from 'qs';
import { App } from '@capacitor/app';
declare const Swal: any;
import { map } from 'rxjs/operators';
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  showReferral = false
  meta = {
    supportPhone: '919004101004',
    supportEmail: 'contact@effoapp.com'
  }
  selectedCity;
  cities = [];
  homeSliders = [];
  homeSlidersSecond = [];
  // DIRECT CONFIGS
  appName = 'Effo';
  appVersion = '0.0.0';
  directNavigate = '/dashboard';
  localStorageName = 'effoProfilev2';
  logoName = 'textW.png';
  // appName="AISA"
  // directNavigate='/jobdashboard'
  // localStorageName='aisaJobProfileLS'
  // logoName='aisaLogo.png'
  // contacts = {
  //   reportEmail: 'contact@effoapp.com',
  //   // reportEmail:"report@aisaindiajobs.com"
  // };
  // DIRECT CONFIGS
  // DIRECT CONFIGS
  // DIRECT CONFIGS

  // shareContent =
  //   `I am inviting you to Download effo app , which provides Various services in one app, GET BUS ,FLIGHTS, JOBS and many more, Join with us because Effo hai toh life easy hai. Use Referral Code : ${this.profile.id || 16
  //   } and get 10 Points. `;

  playStoreLinks = {
    customer: 'https://play.google.com/store/apps/details?id=ionic.effo.starter',
    vendor: 'https://play.google.com/store/apps/details?id=io.effo.vendor',
  };

  drawer = [
    {
      icon: 'apps',
      title: 'Home ',
      active: true,
      role: 'home',
    },
    {
      icon: 'business',
      title: 'Business Registration',
      active: false,
      role: 'business',
    },
    {
      icon: 'star-half',
      title: 'Rate Us',
      active: false,
      role: 'rate',
    },
    {
      icon: 'share-social',
      title: 'Share App',
      active: false,
      role: 'share',
    },
    {
      icon: 'lock-open',
      title: 'Privacy Policy',
      active: false,
      role: 'privacy',
    },
  ];

  auth = {
    phone: '',
    otp: '',
    otpSent: false,
    email: '',
    fullName: '',
    // canLoad: true,
  };
  // profile: any = {
  //   // id: 1,
  // };
  profile: any;
  domainUrl = 'https://api.effoapp.com/';
  apiUrl = this.domainUrl + 'api/';
  isLoading = false;
  constructor(
    public http: HttpClient,
    public actionSheet: ActionSheetController,
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public menu: MenuController,
    public photoViewer: PhotoViewer, public iab: InAppBrowser
  ) {
    App.getInfo().then((data) => {
      this.appVersion = data.version;
    });
    this.domainUrl = 'http://localhost:1337/';
    this.apiUrl = this.domainUrl + 'api/';
    this.getCities();

    ///MAIN CONFIGS

    // this.shareContent='Download the App Now !'
    // this.playStoreLinks={
    //   customer:'',
    //   vendor:''
    // }

    // this.domainUrl = 'http://strapiapi-env-1.ap-south-1.elasticbeanstalk.com/';
    // this.apiUrl = this.domainUrl + 'api/';

    this.drawer.push(
      ...[
        {
          icon: 'call',
          title: 'Contact Us',
          active: false,
          role: 'contact',
        },
        {
          icon: 'log-out',
          title: 'Logout',
          active: false,
          role: 'logout',
        },
      ]
    );

    this.syncProfileFromLs();
  }
  getCities() {
    this._get('cities', '').subscribe((data) => {
      this.cities = data.data;
    });
  }
  async present(content = 'Loading Data...', duration = 10000) {
    this.isLoading = true;
    return await this.loadingCtrl
      .create({
        message: content,
        duration,
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
  async capture(galleryInput: ElementRef, cameraInput: ElementRef) {
    if (isPlatform('ios') || isPlatform('ipad') || isPlatform('ipad')) {
      galleryInput.nativeElement.click();
      return;
    }
    const actionSheet = await this.actionSheet.create({
      header: 'Select Option',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            cameraInput.nativeElement.click();
          },
        },
        {
          text: 'Gallery',
          handler: () => {
            galleryInput.nativeElement.click();
            // console.log('Play clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
  confirmSwal(title = '', text = '') {
    Swal.fire({
      title,
      text,
      imageUrl: 'assets/images/confirm.gif',
      // imageHeight: 200,
      showConfirmButton: false,
      backdrop: `white`,
      // imageAlt: 'Custom image',
      timer: 900,
    });
  }

  async presentToast(message, color = 'dark', time = 2000) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: time,
    });
    toast.present();
  }

  async dismiss() {
    try {
      this.isLoading = false;
      return await this.loadingCtrl
        .dismiss()
        .then(() => console.log('dismissed'));
    } catch (error) { }
  }
  viewImage(image) {
    this.photoViewer.show(image);
  }
  syncProfileFromLs() {
    const tempStringProfile = window.localStorage.getItem(
      this.localStorageName
    );
    if (tempStringProfile) {
      this.profile = JSON.parse(tempStringProfile);
      this.selectedCity = this.profile.city;
      // this.auth.canLoad = false;
    }
  }
  saveProfileObject(profile) {
    this.profile = profile;
    localStorage.setItem(this.localStorageName, JSON.stringify(profile));
  }

  updateLastLogin() {
    this.http.put(this.apiUrl + 'users', {
      // lastLogin
    });
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
  report(subject = 'Report', body = 'I want to report  ....') {
    window.open(
      'mailto:' +
      this.meta.supportEmail +
      '?subject=' +
      subject +
      '&body=' +
      body,
      '_blank'
    );
  }
  showDirection(lat, lng) {
    this.iab.create(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      '_system'
    );
  }
  async share(
    title = 'EFFO ! ',
    text = `I am inviting you to Download effo app , which provides Various services in one app, GET BUS ,FLIGHTS, JOBS and many more, Join with us because
    Effo hai toh life easy hai . Use Referral Code : ${this.profile.id || 16
      } and get 10 Points.`,
    url = 'https://play.google.com/store/apps/details?id=ionic.effo.starter'
  ) {
    console.log(title, text, url);

    await Share.share({
      title,
      text,
      url,
      dialogTitle: 'Share with buddies',
    });
  }
  logout() {
    this.profile = undefined;
    localStorage.clear();
    this.auth.otp = '';
    this.auth.otpSent = false;
    this.router.navigate(['/login']);
  }
  contact(type = 'call', contact = this.meta.supportPhone) {
    if (type == 'call') {
      window.open('tel:+' + contact, "_blank");
    } else {
      let browser = this.iab.create('https://api.whatsapp.com/send?phone=' + contact, "_system")

    }
  }
  mail(mail = 'contact@effoapp.com') {

    window.open('mailto:' + mail + '?subject=Help Needed', '_blank')
  }


  timeSince(date) {
    try {
      const seconds = Math.floor(
        (new Date().valueOf() - new Date(date).valueOf()) / 1000
      );

      let interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + ' years ago';
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + ' months ago';
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + ' days ago';
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + ' hours ago';
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + ' minutes ago';
      }
      return Math.floor(seconds) + ' seconds';
    } catch (error) {
      return '';
    }
  }

  parseData(data: string) {
    switch (data) {
      case 'mondayToFriday':
        return 'Monday To Friday';
        break;
      case 'mondayToSaturday':
        return 'Monday To Saturday';
        break;

      default:
        return data;
        break;
    }
  }
  async syncFCMToken() {
    try {
      await PushNotifications.requestPermissions();
      await PushNotifications.register();
      if (this.profile) {
        if (this.profile.id) {
          await PushNotifications.addListener('registration', (token) => {
            // console.info('Registration token: ', token.value);
            console.log(token.value);
            // alert(token.value);

            this.http
              .put(this.apiUrl + 'users/' + this.profile.id, {
                token: token.value,
              })
              .subscribe((data) => { });
          });

          // FCM.getToken()
          //   .then((token) => {})
          //   .catch((err) => console.log(err));
        }
      }

      PushNotifications.addListener(
        'pushNotificationReceived',
        async (notification) => {
          const toast = await this.toastController.create({
            header: notification.title,
            message: notification.body,
            // icon: 'information-circle',
            // position: 'top',
            buttons: [
              {
                side: 'end',
                // icon: 'star',
                cssClass: 'toastText',
                text: 'View',
                handler: () => {
                  this.router.navigate([notification.data.route]);
                  // console.log('Favorite clicked');
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                },
              },
            ],
          });
          await toast.present();

          // alert(JSON.stringify(notification.data.))
          // alert('local'+notification.data.link)
          // LocalNotifications.schedule({
          //   notifications: [
          //     {
          //       id: 1,
          //       title: notification.title,
          //       body: notification.body,
          //     },
          //   ],
          // }
          // ,);
        }
      ).then((data) => { });

      PushNotifications.addListener(
        'pushNotificationActionPerformed',
        (data) => {
          // alert(data)
          // only navigate if logged in
          if (this.profile) {
            this.router.navigate([data.notification.data.route]);
          }

          // data.notification.data.
        }
      )
        .then((data2) => {
          // alert('data2'+data2)
        })
        .catch((err) => {
          // alert('error'+err)
        });
    } catch (error) { }
  }

  _get(endpoint, params): Observable<any> {
    return this.http.get(this.apiUrl + endpoint + '?' + params).pipe(
      map((data) => {
        // console.log("got data to handle", data);
        this.handleResponse(data);

        return data;
      })
    );
  }
  _post(endpoint, params, body): Observable<any> {
    return this.http.post(this.apiUrl + endpoint, body).pipe(
      map((data) => {
        // console.log("got data to handle", data);
        this.handleResponse(data);

        return data;
      })
    );
  }
  _put(endpoint, params, body): Observable<any> {
    return this.http.put(this.apiUrl + endpoint, body).pipe(
      map((data) => {
        // console.log("got data to handle", data);
        this.handleResponse(data);

        return data;
      })
    );
  }
  _delete(endpoint, params = {}, body = {}): Observable<any> {
    return this.http.delete(this.apiUrl + endpoint, body).pipe(
      map((data) => {
        // console.log("got data to handle", data);
        this.handleResponse(data);

        return data;
      })
    );
  }

  slideClicked(slide) {
    if (slide.attributes.onclick == 'redirect') {
      this.router.navigate([slide.attributes.link]);
    } else if (slide.attributes.onclick == 'web') {

      this.iab.create(slide.attributes.link, '_system');
    }
  }
  statusToClassCab(status) {
    switch (status) {
      case 'pending':
        return 'text-blue-600 ';
        break;

      default:
        break;
    }
  }
  statusToClass(status) {
    switch (status) {
      case 'pending':
        return 'bg-blue-600 text-white';
        break;
      case 'accepted':
        return 'bg-green-600 text-white';
        break;
      case 'selected':
        return 'bg-green-600 text-white';
        break;
      case 'shortlisted':
        return 'bg-yellow-600 text-white';
        break;
      case 'rejected':
        return 'bg-red-600 text-white';
        break;

      default:
        break;
    }
  }

  getSliders() {
    const query = qs.stringify({
      filters: {
        position: 'homeTop',
      },
      populate: '*',
    });
    this._get('sliders', query).subscribe((data) => {
      this.homeSliders = data.data;
    });
  }
  getSlidersSecond() {
    const query = qs.stringify({
      filters: {
        position: 'homeSecond',
      },
      populate: '*',
    });
    this._get('sliders', query).subscribe((data) => {
      this.homeSlidersSecond = data.data;
    });
  }

  handleResponse(body) {
    if (body.logout) {
      this.logout();
    }
    if (body.toast) {
      this.presentToast(
        body.toast.title,

        body.toast.type,
        body.toast.duration
      );
    }
    if (body.navigation) {
      this.router.navigate([body.navigation.link], {
        ...body.navigation.params,
      });
    }
    if (body.swal) {
      this.swal(
        body.swal.title,
        body.swal.body,
        body.swal.type,
        body.swal.timer
      );

      // this.navCtrl.push(body.navigation.link,body.navigation.params)
    }
    if (body.webview) {
      // TO-DO ADD WEBVIEW
      // this.eventEmitters.navigation.emit({
      //   link: "CommonWebPage",
      //   params: {
      //     title: body.webview.title,
      //     url: body.webview.url,
      //   },
      // });
    }
  }
}
