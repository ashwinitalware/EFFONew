import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-newsdashboard',
  templateUrl: './newsdashboard.page.html',
  styleUrls: ['./newsdashboard.page.scss'],
})
export class NewsdashboardPage implements OnInit {

  switchTab = 'top'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor(
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Share This Post',
        role: 'destructive',
        icon: 'arrow-redo-outline',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Like This Story',
        icon: 'thumbs-up-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Follow The Times Of India',
        icon: 'person-add-outline',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Save',
        icon: 'bookmark-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: ' Copy Link',
        icon: 'copy-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}

// }
