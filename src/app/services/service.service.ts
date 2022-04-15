import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  selectedVendorId;
  selectedServices = [];
  categories = [];
  constructor(public dataService: DataService, public http: HttpClient) {}
  getCategories() {
    // this.http.get(this.dataService.apiUrl + 'service-categories').subscribe(
    this.http
      .get(this.dataService.apiUrl + 'service-categories', {
        params: {
          populate: '*',
        },
      })
      .subscribe(
        (data: any) => {
          this.categories = data.data;
          for (let i = 0; i < this.categories.length; i++) {
            // this.categories[i].jobs = [];
            setTimeout(() => {
              // this.getJobs(true, i);
            }, 100 * i);
          }
        },
        (err) => {
          alert('Connection Error');
        }
      );
  }
}
