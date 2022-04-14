import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-subcategories',
  templateUrl: './service-subcategories.page.html',
  styleUrls: ['./service-subcategories.page.scss'],
})
export class ServiceSubcategoriesPage implements OnInit {
  data = [];
  constructor(
    public http: HttpClient,
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.getData();
  }

  getData() {
    this.http
      .get(this.dataService.apiUrl + 'service-subcategories', {
        params: {
          populate: '*',
          'filters[serviceCategory][id][$eq]':
            this.activatedRoute.snapshot.params.categoryId + '',
        },
      })
      .subscribe((data: any) => {
        this.data = data.data;
      });
  }

  ngOnInit() {}
}
