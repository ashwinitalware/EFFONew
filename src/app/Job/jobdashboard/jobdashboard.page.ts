import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';
import qs from 'qs';
@Component({
  selector: 'app-jobdashboard',
  templateUrl: './jobdashboard.page.html',
  styleUrls: ['./jobdashboard.page.scss'],
})
export class JobdashboardPage implements OnInit {
  showTitleSuggestions = false;
  showCitySuggesionts = false;
  titleSuggestions = [];
  selectedTitleSuggesion = '';
  citySuggestions = [];
  selectedCitySuggesion = '';
  sliceValue = 3;
  temp = 'IT Industry';
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
  constructor(
    public jobService: JobService,
    public router: Router,
    public navCtrl: NavController,
    public http: HttpClient,
    public dataService: DataService
  ) {
    this.jobService.resetFilters();
    this.jobService.getCategories();
    this.getNewJobs();
    this.getNearJobs();
    this.getHighSalaryJobs();
    this.getJobProfileData();
  }

  getJobProfileData() {
    this.http
      .get(this.dataService.apiUrl + 'user-job-profiles', {
        params: {
          'filters[user][id][$eq]': this.dataService.profile.id,
          populate: '*',
        },
      })
      .subscribe((data: any) => {
        if (data.data.length) {
          const profile = data.data[0].attributes;
          if (
            !profile.about ||
            !profile.educationField ||
            !profile.skills ||
            !profile.university
          ) {
            this.dataService.presentToast('Please Complete Profile First');
            this.router.navigate(['/jobdashboard/profile']);
          }
        } else {
          this.dataService.presentToast('Please Complete Profile First');
          this.router.navigate(['/jobdashboard/profile']);
        }

        // this.educations = data.data;
      });
  }

  getSuggesions() {
    if (this.selectedTitleSuggesion == this.jobService.jobFilters.title) return;
    // alert(this.jobService.jobFilters.title);
    if (!this.jobService.jobFilters.title) return (this.titleSuggestions = []);
    this.http
      .get(this.dataService.apiUrl + 'custom/homeSearch', {
        params: {
          queryText: this.jobService.jobFilters.title,
        },
      })
      .subscribe((data: any) => {
        this.titleSuggestions = [];
        console.log(data);
        if (data.jobs && data.jobs.length) {
          this.titleSuggestions.push({
            title: this.jobService.jobFilters.title,
            type: 'job',
          });
          let i = 0;
          data.jobs.forEach((job) => {
            // i++;
            // if (
            //   this.titleSuggestions.length &&
            //   this.titleSuggestions[i - 1].title == job.title
            // )
            //   return;

            this.titleSuggestions.push({
              title: job.title,
              type: 'job',
            });
          });
          // data.jobs.forEach((job) => {
          //   this.titleSuggestions.push({
          //     title: job.skillsByComma,
          //     type: 'job',
          //   });
          // });
          // data.jobs.forEach((job) => {
          //   if (job.jobCategory)
          //     this.titleSuggestions.push({
          //       title: job.jobCategory.name,
          //       type: 'job',
          //     });
          // });
        }

        // titleSuggestions.forEach((suggestions) => {});

        this.titleSuggestions = this.titleSuggestions.slice(0, 5);
      });
  }
  getSuggesionsCities() {
    if (this.selectedCitySuggesion == this.jobService.jobFilters.city) return;
    // alert(this.jobService.jobFilters.title);
    if (!this.jobService.jobFilters.city) {
      return (this.citySuggestions = []);
    }
    this.http
      .get(this.dataService.apiUrl + 'custom/citySearch', {
        params: {
          city: this.jobService.jobFilters.city,
        },
      })
      // .get(
      //   // eslint-disable-next-line max-len
      //   `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyD6d0aNvUiSWaENoQ1UuqCOzfMg0Wmq7Do&types=%28cities%29&components=country:ind&input=${this.jobService.jobFilters.city}`
      // )
      .subscribe((data: any) => {
        this.citySuggestions = [];
        if (data.predictions && data.predictions.length) {
          // this.citySuggestions.push({
          //   title: this.jobService.jobFilters.city,
          // });

          data.predictions.forEach((city) => {
            this.citySuggestions.push({
              title: city.structured_formatting.main_text,
            });
          });
        }
      });
  }
  selected(suggestion, type) {
    if (type == 'title') {
      this.jobService.jobFilters.title = suggestion.title;
      this.selectedTitleSuggesion = suggestion.title;
      this.titleSuggestions = [];
    } else {
      this.jobService.jobFilters.city = suggestion.title;
      this.selectedCitySuggesion = suggestion.title;
      this.citySuggestions = [];
    }
  }
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }
  categorySelected(category) {
    // [routerLink]="'/joblist/'+category.id"
    this.jobService.resetFilters();
    this.jobService.jobFilters.title = category.attributes.name;
    this.router.navigate(['/joblist']);
  }
  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }

  search() {
    // [routerLink]="'/joblist/'+(this.jobService.jobFilters.title||'any')+'/'+this.jobService.jobFilters.city"
    this.jobService.resetOtherFilters();
    // this.jobService.jobFilters.title = category.attributes.name;
    this.router.navigate(['/joblist']);
  }
  viewAll(category) {
    console.log(category);
    // let query = '';
    switch (category.title) {
      case 'New Jobs':
        // query = 'newJobs';
        this.jobService.resetFilters();
        this.jobService.jobFilters.sort = ['createdAt:desc'];
        this.router.navigate(['/joblist']);
        break;
      case 'Jobs Near Me':
        this.jobService.resetFilters();
        this.jobService.jobFilters.city = this.dataService.profile.city || '';
        this.router.navigate(['/joblist']);
        break;
      case 'High Salary Jobs':
        this.jobService.resetFilters();
        this.jobService.jobFilters.sort = ['salaryFrom:desc'];
        this.router.navigate(['/joblist']);
        break;

      default:
        return;
    }
    // this.router.navigate(['/joblist/' + query]);
  }
  getNewJobs() {
    let query = qs.stringify({
      filters: {
        ...this.commonFilter,
      },
      sort: ['createdAt:desc'],
      populate: this.populate,
      pagination: {
        pageSize: '5',
      },
    });

    this.http
      .get(this.dataService.apiUrl + 'job-posts?' + query, {})
      .subscribe((data: any) => {
        this.sections[0].jobs = data.data;
      });
  }
  getNearJobs() {
    let query = qs.stringify({
      sort: ['createdAt:desc'],
      populate: this.populate,
      pagination: {
        pageSize: '5',
      },
      filters: {
        ...this.commonFilter,
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http
      .get(this.dataService.apiUrl + 'job-posts?' + query, {})
      .subscribe((data: any) => {
        this.sections[1].jobs = data.data;
      });
  }
  getHighSalaryJobs() {
    let query = qs.stringify({
      sort: ['createdAt:desc'],
      populate: this.populate,
      pagination: {
        pageSize: '5',
      },
      filters: {
        ...this.commonFilter,
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http
      .get(this.dataService.apiUrl + 'job-posts?' + query, {})
      .subscribe((data: any) => {
        this.sections[2].jobs = data.data;
      });
  }

  // slideChanged() {
  //   this.slider.stopAutoplay();
  // }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
}
