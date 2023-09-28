import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(public iab: InAppBrowser) { }

  ngOnInit() { }
  contact(type, contact) {
    if (type == 'call') {
      window.open('tel:+' + contact);
    } else {
      this.iab.create('https://api.whatsapp.com/send?phone=' + contact, "_system");
    }
  }
  mail(mail) {
    window.open('mailto:' + mail + '?subject=Help Needed', '_blank')

  }
}
