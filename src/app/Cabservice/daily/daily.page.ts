import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
// import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
  // modalController: any;

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
