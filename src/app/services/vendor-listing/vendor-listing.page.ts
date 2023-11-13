import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

import qs from 'qs';
@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.page.html',
  styleUrls: ['./vendor-listing.page.scss'],
})
export class VendorListingPage implements OnInit {
  data = [];
  notFound = false;
  searchQuery = '';
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getVendors();
  }
  clear() {
    this.getVendors();
  }
  getVendors(event = '') {
    this.notFound = false;
    this.searchQuery = event;

    const query = qs.stringify({
      filters: {
        status: 'accepted',
        visibilityStatus: "approved",
        $or: [
          {
            companyName: {
              $contains: this.searchQuery || '',
            },
          },
          {
            companyAddress: {
              $contains: this.searchQuery || '',
            },
          },
        ],
        vendor: {
          city: {
            $containsi: this.dataService.profile.city,
            // '$eq': 'pune'
          },
        },
        serviceSubcategories: this.activatedRoute.snapshot.params.subcategoryId,
      },
      // populate: {
      //   vendor: {
      //     shoppingCategories: {
      //       populate: '*'
      //     },
      //   },
      // },
      populate: '*',
    });
    this.http
      .get(this.dataService.apiUrl + 'service-profiles?' + query, {
        params: {
          // populate: '*',
          // 'filters[vendor][city][$containsi]': this.dataService.profile.city,
          // 'filters[serviceSubcategories][id][sms.subcategoryId,
        },
      })
      .subscribe((data: any) => {
        this.data = data.data;
        if (!this.data.length) {
          this.notFound = true;
        }
      });
  }
  ngOnInit() { }
}
