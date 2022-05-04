import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import qs from 'qs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {
  data;

  imageError;
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getPropertyDetails();
  }

  ngOnInit() {}
  getPropertyDetails() {
    const query = qs.stringify({
      populate: {
        user: {
          populate: '*',
        },
      },
    });
    this.http
      .get(
        this.dataService.apiUrl +
          'properties/' +
          this.activatedRoute.snapshot.params.id +
          '?' +
          query,
        {}
      )
      .subscribe((data: any) => {
        this.data = data.data;

        try {
          data.data.attributes.imagesArray =
            data.data.attributes.images.split(',');
        } catch (error) {
          data.data.attributes.imagesArray = [];
        }
      });
  }
}
