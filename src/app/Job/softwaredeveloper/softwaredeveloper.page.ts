import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-softwaredeveloper',
  templateUrl: './softwaredeveloper.page.html',
  styleUrls: ['./softwaredeveloper.page.scss'],
})
export class SoftwaredeveloperPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sort By',
      inputs: [
        {
          name: 'radio',
          type: 'radio',
          label: 'Recommended',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio',
          type: 'radio',
          label: 'Salary - high to low ',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          },

        },
        {
          name: 'radio',
          type: 'radio',
          label: 'Distance - near to far ',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          },

        },
        {
          name: 'radio',
          type: 'radio',
          label: 'Newer Jobs',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
          }
        },




      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
