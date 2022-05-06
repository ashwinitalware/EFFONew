import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { OldExService } from 'src/app/services/old-ex.service';

@Component({
  selector: 'app-oldex-my-products',
  templateUrl: './oldex-my-products.page.html',
  styleUrls: ['./oldex-my-products.page.scss'],
})
export class OldexMyProductsPage implements OnInit {

  constructor(public oldExService:OldExService,public dataService:DataService) { 
    this.oldExService.getMyProducts()
  }

  ngOnInit() {
  }

  

}
