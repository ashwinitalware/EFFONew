import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { OldExService } from 'src/app/services/old-ex.service';

@Component({
  selector: 'app-oldex-listing',
  templateUrl: './oldex-listing.page.html',
  styleUrls: ['./oldex-listing.page.scss'],
})
export class OldexListingPage implements OnInit {

  constructor(public dataService:DataService,public oldExService:OldExService) { 

    this.oldExService.getProducts()

  }

  ngOnInit() {
  }

}
