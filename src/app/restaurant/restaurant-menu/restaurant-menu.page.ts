import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.page.html',
  styleUrls: ['./restaurant-menu.page.scss'],
})
export class RestaurantMenuPage implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

}
