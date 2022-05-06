import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import qs from 'qs'
@Component({
  selector: 'app-oldex-details',
  templateUrl: './oldex-details.page.html',
  styleUrls: ['./oldex-details.page.scss'],
})
export class OldexDetailsPage implements OnInit {
  data;

  imageError;
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getDetails();
  }

  ngOnInit() {}
  getDetails() {
    const query = qs.stringify({
      populate: '*',
      
    });
    this.http
      .get(
        this.dataService.apiUrl +
          'oldex-products/' +
          this.activatedRoute.snapshot.params.id +
          '?' +
          query,
        {}
      )
      .subscribe((data: any) => {
        this.data = data.data;

        // try {
        //   data.data.attributes.imagesArray =
        //     data.data.attributes.images.split(',');
        // } catch (error) {
        //   data.data.attributes.imagesArray = [];
        // }
      });
  }
}
