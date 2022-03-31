import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public nav: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.nav.navigateForward('login');
    }, 4000);
  }
}
