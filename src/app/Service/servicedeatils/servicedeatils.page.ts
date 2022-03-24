import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-servicedeatils',
  templateUrl: './servicedeatils.page.html',
  styleUrls: ['./servicedeatils.page.scss'],
})
export class ServicedeatilsPage implements OnInit {
  add = false
  add1 = false
  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  // async presentHalfModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     componentProps: { value: 123 },
  //     cssClass: 'half-modal'
  //   });
  //   return await modal.present();
  // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      cssClass: 'half-modal',
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
