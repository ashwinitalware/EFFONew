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
  notFound=false
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
          'filters[vendor][city][$containsi]': this.dataService.profile.city,
          'filters[serviceSubcategories][id][$eq]':
            this.activatedRoute.snapshot.params.subcategoryId,
        },
      })
      .subscribe((data: any) => {
        this.data = data.data;
        if(!this.data.length)
        this.notFound=true
      });
  }
  ngOnInit() {}
}
