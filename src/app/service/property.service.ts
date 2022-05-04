import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

import qs from 'qs';
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  noPropertyFound = false;
  data = [];
  ownProperties = [];
  filters = {
    currentPage: 1,
    type: '',
    city: '',
  };

  constructor(public http: HttpClient, public dataService: DataService) {}
  getData(pager = undefined, firstTime = true) {
    if (firstTime) {
      this.filters.currentPage = 1;
    }
    this.noPropertyFound = false;

    if (firstTime) {
      this.data = [];
    }
    if (pager) {
      pager.target.complete();
    }
    let query = qs.stringify({
      populate: '*',
      pagination: {
        // page: this.filters.currentPage + 1,
        page: this.filters.currentPage++,
        pageSize: '10',
      },
      filters: {
        city: {
          $eq: this.dataService.profile.city,
        },
        type: {
          $contains: this.filters.type,
        },

        // user: {
        //   id: {
        //     $eq: this.dataService.profile.id,
        //   },
        // },
      },
    });

    this.dataService.present();

    this.dataService._get('properties', query).subscribe(
      (data) => {
        this.dataService.dismiss();
        if (!data.data.length) return (this.noPropertyFound = true);

        data.data.forEach((property) => {
          try {
            property.attributes.imagesArray =
              property.attributes.images.split(',');
          } catch (error) {
            property.attributes.imagesArray = [];
          }
        });

        // this.data = data.data;
        // alert(firstTime);
        if (firstTime) {
          this.data = data.data;
        } else {
          this.data.push(...data.data);
        }
        console.log(this.data);
      },
      (err) => {
        this.dataService.dismiss();
      }
    );
  }

  getMyProperties() {
    let query = qs.stringify({
      populate: '*',
      filters: {
        user: {
          id: {
            $eq: this.dataService.profile.id,
          },
        },
      },
    });

    this.dataService._get('properties', query).subscribe((data) => {
      data.data.forEach((property) => {
        try {
          property.attributes.imagesArray =
            property.attributes.images.split(',');
        } catch (error) {
          property.attributes.imagesArray = [];
        }
      });

      this.ownProperties = data.data;
    });
  }
}
