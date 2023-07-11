import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bus-bookings',
  templateUrl: './bus-bookings.page.html',
  styleUrls: ['./bus-bookings.page.scss'],
})
export class BusBookingsPage implements OnInit {

  constructor(public busService:BusService,public dataService:DataService,public navCtrl:NavController) { 
if(!this.busService.bookings.length)
{
  this.navCtrl.back()
  this.dataService.presentToast('No Bookings Found')
}
if(!this.busService.bookings){
  this.navCtrl.back()
  this.dataService.presentToast('No Bookings Found')

  }
}
  ngOnInit() {
  }

}
