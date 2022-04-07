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

declare const Swal: any;
@Injectable({
  providedIn: 'root',
})
export class DataService {
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
  domainUrl = 'http://localhost:1337/';
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
    this.domainUrl =
      'http://strapiapi-env.eba-dtmmqzaa.ap-south-1.elasticbeanstalk.com/';
    this.apiUrl = this.domainUrl + 'api/';
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

  async share(title, text, url = '') {
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
  contact(type, contact) {
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
}
