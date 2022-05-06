import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { OldExService } from 'src/app/services/old-ex.service';

@Component({
  selector: 'app-oldex-home',
  templateUrl: './oldex-home.page.html',
  styleUrls: ['./oldex-home.page.scss'],
})
export class OldexHomePage implements OnInit {

  constructor(public oldExService:OldExService,public dataService:DataService,public navCtrl:NavController) {

    this.oldExService.getCategories()
    this.oldExService.getNearbyProducts()

   }

  ngOnInit() {
  }
  categorySelected(category){


    this.oldExService.filters.query=undefined
    this.oldExService.filters.city=this.dataService.profile.city
    this.oldExService.filters.category=category.id
    this.navCtrl.navigateForward(['/oldex-listing'])


  }
  search(){


    this.oldExService.filters.city=this.dataService.profile.city
    this.oldExService.filters.category=undefined
    this.navCtrl.navigateForward(['/oldex-listing'])

    
  }


}
