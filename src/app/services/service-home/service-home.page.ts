import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';
import qs from 'qs';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.page.html',
  styleUrls: ['./service-home.page.scss'],
})
export class ServiceHomePage implements OnInit {
  showTitleSuggestions = false;
  showCitySuggesionts = false;
  titleSuggestions = [];
  selectedTitleSuggesion = '';
  citySuggestions = [];
  selectedCitySuggesion = '';
  sliceValue = 3;
  temp = 'IT Industry';
  suggestions = [];
  noSuggesionsFound = false;
  topVendors = [];
  commonFilter = {
    expiry: {
      $gt: new Date().toISOString(),
    },
  };
  // New Jobs Near Me
  populate = {
    author: {
      populate: '*',
    },
    jobCategory: '*',
  };

  sections = [
    {
      title: 'New Jobs',
      subtitle: 'Handpicked jobs by our experts especially for you',
      color: 'black',
      jobs: [],
    },
    {
      title: 'Jobs Near Me',
      subtitle: 'Nearby Jobs On EFFO App',
      color: 'blue',
      jobs: [],
    },
    {
      title: 'High Salary Jobs',
      subtitle: 'High salary jobs in your desired category',
      color: 'green',
      jobs: [],
    },
  ];
  // bookride = false;
  showAll = false;
  selectedLeave = '';

  // book_ride() {
  //   this.bookride = true;
  // }

  slideOptss = {
    slidesPerView: 1.5,
  };

  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  switchTab = 'job';
  searchQuery = '';
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public http: HttpClient,
    public dataService: DataService,
    public serviceService: ServiceService
  ) {
    this.serviceService.getCategories();
    this.getTopVendors();
    // this.jobService.resetFilters();
    // this.jobService.getCategories();
    // this.getNewJobs();
    // this.getNearJobs();
    // this.getHighSalaryJobs();
  }

  getSuggesions(event) {
    this.noSuggesionsFound = false;
    console.log(event);
    this.suggestions = [];
    if (!event.detail.value) {
      return;
    }
    this.serviceService.categories.forEach((category) => {
      // console.log(categories);

      category.attributes.subCategories.data.forEach((subCategory) => {
        if (this.suggestions.length > 5) return;
        console.log(subCategory.attributes.name);
        if (
          subCategory.attributes.name
            .toLowerCase()
            .includes(event.detail.value.toLowerCase())
        ) {
          this.suggestions.push({
            title: subCategory.attributes.name,
            link: '/vendor-listing/' + subCategory.id,
          });
        }
      });
    });
    // eslint-disable-next-line curly
    if (!this.suggestions.length) this.noSuggesionsFound = true;
    // alert(this.searchQuery);
  }

  suggestionClicked(suggestion) {
    this.router.navigate([suggestion.link]);
    this.searchQuery = '';
  }
  getTopVendors() {
    this.dataService
      ._get(
        'service-profiles',
        qs.stringify({
          populate: '*',
          filters: {
            vendor: {
              city: {
                $containsi: this.dataService.profile.city,
              },
            },
          },
          sort: ['rating:desc'],
          pagination: {
            pageSize: '20',
          },
        })
      )
      .subscribe((data) => {
        this.topVendors = data.data;
      });

    // this.http
    //   .get(this.dataService.apiUrl + 'service-profiles',

    //   {

    //     params: {
    //       populate: '*',
    //       'filters[vendor][city][$containsi]': this.dataService.profile.city,
    //       sort: ['rating:desc'],
    //       'pagination[pageSize]': '10',
    //     },
    //   })
    //   .subscribe((data: any) => {
    //     this.topVendors = data.data;
    //   });
  }
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }
  categorySelected(category) {
    this.router.navigate(['/service-subcategories/' + category.id]);
  }
  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
}
