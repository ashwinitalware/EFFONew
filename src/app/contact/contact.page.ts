import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  contact(type, contact) {
    if (type == 'call') {
      window.open('tel:+' + contact);
    } else {
      window.open('https://api.whatsapp.com/send?phone=' + contact);
    }
  }
  mail(mail){
    window.open('mailto:'+mail+'?subject=Help Needed', '_system')

  }
}
