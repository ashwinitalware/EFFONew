import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { HttpClient } from '@angular/common/http';
import { AppUpdate } from '@robingenz/capacitor-app-update';
import { FCM } from '@capacitor-community/fcm';
import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Observable } from 'rxjs';
import qs from 'qs';
declare const Swal: any;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  homeSliders = [];
  homeSlidersSecond = [];
  // DIRECT CONFIGS
  appName = 'Effo';
  directNavigate = '/dashboard';
  localStorageName = 'effoProfilev2';
  logoName = 'textW.png';
  // appName="AISA"
  // directNavigate='/jobdashboard'
  // localStorageName='aisaJobProfileLS'
  // logoName='aisaLogo.png'
  contacts = {
    reportEmail: 'support@vendorclub.com',
    // reportEmail:"report@aisaindiajobs.com"
  };
  // DIRECT CONFIGS
  // DIRECT CONFIGS
  // DIRECT CONFIGS

  shareContent =
    'I Am Inviting you to use EFFO app to fulfill all your daily requirements. It provides you best jobs and a variety of at home services. EFFO  was built  to ease your  life.';

  playStoreLinks = {
    customer:
      'https://play.google.com/store/apps/details?id=ionic.effo.starter',
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
  domainUrl = 'https://strapi.effoapp.com/';
  apiUrl = this.domainUrl + 'api/';
  isLoading = false;
  constructor(
    public http: HttpClient,
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public menu: MenuController,
    public photoViewer: PhotoViewer
  ) {
    // this.domainUrl = 'http://localhost:1337/';
    // this.apiUrl = this.domainUrl + 'api/';

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
    } catch (error) {}
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
        this.contacts.reportEmail +
        '?subject=' +
        subject +
        '&body=' +
        body,
      '_system'
    );
  }
  async share(
    title = 'Download Effo App',
    text = 'I Am Inviting you to use EFFO app to fulfill all your daily requirements. It provides you best jobs and a variety of at home services. EFFO  was built  to ease your  life.',
    url = 'https://play.google.com/store/apps/details?id=ionic.effo.starter'
  ) {
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
  contact(type = 'call', contact) {
    if (type == 'call') {
      window.open('tel:+' + contact);
    } else {
      window.open('https://api.whatsapp.com/send?phone=' + contact);
    }
  }
  timeSince(date) {
    try {
      let seconds = Math.floor(
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
            .subscribe((data) => {});
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
    ).then((data) => {});

    PushNotifications.addListener('pushNotificationActionPerformed', (data) => {
      // alert(data)
      // only navigate if logged in
      if (this.profile) {
        this.router.navigate([data.notification.data.route]);
      }

      // data.notification.data.
    })
      .then((data2) => {
        // alert('data2'+data2)
      })
      .catch((err) => {
        // alert('error'+err)
      });
  }

  _get(endpoint, params): Observable<any> {
    return this.http.get(this.apiUrl + endpoint + '?' + params);
  }
  _post(endpoint, params, body): Observable<any> {
    return this.http.post(this.apiUrl + endpoint, body);
  }
  _put(endpoint, params, body): Observable<any> {
    return this.http.put(this.apiUrl + endpoint, body);
  }
  _delete(endpoint, params = {}, body = {}): Observable<any> {
    return this.http.delete(this.apiUrl + endpoint, body);
  }

  slideClicked(slide) {
    if (slide.attributes.onclick == 'redirect') {
      this.router.navigate([slide.attributes.link]);
    } else if (slide.attributes.onclick == 'web') {
      window.open(slide.attributes.link, '_system');
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
}
