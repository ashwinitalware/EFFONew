import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.page.html',
  styleUrls: ['./vendor-listing.page.scss'],
})
export class VendorListingPage implements OnInit {
  data = [];
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getVendors();
  }
  getVendors() {
    this.http
      .get(this.dataService.apiUrl + 'service-profiles', {
        params: {
          populate: '*',
          'filter[vendor][city][$containsi]': this.dataService.profile.city,
          'filter[serviceSubcategories][id][$eq]':
            this.activatedRoute.snapshot.params.subcategoryId,
        },
      })
      .subscribe((data: any) => {
        this.data = data.data;
      });
  }
  ngOnInit() {}
}
