import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-vendor-menu',
  templateUrl: './shopping-vendor-menu.page.html',
  styleUrls: ['./shopping-vendor-menu.page.scss'],
})
export class ShoppingVendorMenuPage implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { 


    alert(this.activatedRoute.snapshot.params.id)

  }

  ngOnInit() {
  }

}
