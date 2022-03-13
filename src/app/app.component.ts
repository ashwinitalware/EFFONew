import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService } from './services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    public platform: Platform,
    public iab: InAppBrowser,
    public dataService: DataService
  ) {
    this.initializeApp();
    console.log(this.dataService.profile);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // this.router.navigate(['/profile']);
    });
  }

  share() {}
  rateUs() {}
  businessRegistration() {}
  contactUs() {}
  privacy() {}
  logout() {}
  edit() {
    this.dataService.menu.close();
    this.router.navigate(['/editprofile']);
  }
  itemClicked(item) {
    this.dataService.menu.close();
    if (item.role == 'home') this.router.navigate(['/dashboard']);
    if (item.role == 'privacy') alert('need terms & conditions');
    if (item.role == 'contact') this.router.navigate(['/contactus']);
    if (item.role == 'share') {
      navigator.share({
        title: 'Download Effo App',
        // eslint-disable-next-line max-len
        text: 'You will get all information about home appliances repairing, Beauty parlor, cab services, contractor, consultants, events, catering service, vehicle service, photography, mandap, Hall /lawns, classes, school, college, tours and travels, washing center, school bus, and other huge services.',
        url: 'https://play.google.com/store/apps/details?id=ionic.effo.starter',
      });
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
      window.open(
        'https://play.google.com/store/apps/details?id=ionic.effo.starter',
        '_system'
      );
    }
  }
}
