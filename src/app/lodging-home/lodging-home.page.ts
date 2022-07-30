import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import qs from 'qs';
@Component({
  selector: 'app-lodging-home',
  templateUrl: './lodging-home.page.html',
  styleUrls: ['./lodging-home.page.scss'],
})
export class LodgingHomePage implements OnInit {
  sliders = [];
  slides = [
    {
      url: 'assets/shopping/ad1.jpg',
    },
    {
      url: 'assets/shopping/ad2.jpg',
    },
  ];
  lodges = [];
  searchQuery = '';
  constructor(public http: HttpClient, public dataService: DataService) {
    this.getSliders();
    this.getLodges();
  }

  ngOnInit() {}
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  clear() {
    this.searchQuery = '';
    this.getLodges('');
  }
  getLodges(event = '') {
    let query = qs.stringify({
      filters: {
        lodgeName: {
          $contains: event || '',
        },
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
  getSliders() {
    let query = qs.stringify({
      filters: {
        position: 'lodgingHome',
      },
      populate: '*',
    });
    this.dataService._get('sliders/', query).subscribe((data: any) => {
      this.sliders = data.data;
    });
  }
}
