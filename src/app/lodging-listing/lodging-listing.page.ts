import { Component, OnInit } from '@angular/core';
import qs from 'qs';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-lodging-listing',
  templateUrl: './lodging-listing.page.html',
  styleUrls: ['./lodging-listing.page.scss'],
})
export class LodgingListingPage implements OnInit {
  lodges = [];
  constructor(public dataService: DataService) {
    this.getLodges();
  }

  ngOnInit() {}
  getLodges() {
    let query = qs.stringify({
      filters: {
        vendor: {
          // id: {
          //   $eq:this.dataService.profile.city
          // }
        },
      },
      populate: '*',
    });
    this.dataService._get('lodging-profiles', query).subscribe((data) => {
      this.lodges = data.data;
    });
  }
}
