import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.page.html',
  styleUrls: ['./property-list.page.scss'],
})
export class PropertyListPage implements OnInit {
  constructor(public properService: PropertyService) {
    this.properService.getData();
  }

  ngOnInit() {}
}
