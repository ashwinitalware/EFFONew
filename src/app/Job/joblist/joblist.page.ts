import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';
import { stringify } from 'query-string';
import qs from 'qs';
@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.page.html',
  styleUrls: ['./joblist.page.scss'],
})
export class JoblistPage implements OnInit {
  selectedFilterSection = 'type';
  filterTypes = [
    {
      name: 'Job Type',
      icon: 'bookmarks',
      tag: 'type',
    },
    {
      name: 'Sort By',
      icon: 'list',
      tag: 'sort',
    },
    {
      name: 'Salary',
      icon: 'cash',
      tag: 'salary',
    },
    {
      name: 'Experience',
      icon: 'cellular',
      tag: 'experience',
    },
    {
      name: 'Location',
      icon: 'location',
      tag: 'location',
    },
  ];
  totalJobs = 0;
  currentPage = 0;
  totalPage = 1;
  showFilterModal = false;
  jobs = [];
  jobCategoryIdOrQuery;
  city;
  //common filter
  commonFilter: any = {
    expiry: {
      $gt: new Date().toISOString(),
    },
  };

  // common populate
  populate = {
    author: {
      populate: '*',
    },
    jobCategory: '*',
  };
  noJobsFound = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public jobService: JobService,
    public navCtrl: NavController,
    public http: HttpClient,
    public dataService: DataService
  ) {
    console.log('filters.......', this.jobService.jobFilters);

    this.jobCategoryIdOrQuery =
      this.activatedRoute.snapshot.params.categoryIdOrQuery;

    this.city = this.activatedRoute.snapshot.params.city;
    this.getData();
  }
  apply() {
    this.showFilterModal = false;
    // this.jobService.jobFilters.type = type;
    // this.commonFilter = {
    //   ...this.commonFilter,
    //   type: {
    //     $contains: this.jobService.jobFilters.type,
    //   },
    // };
    // this.getAllJobs();
    // this.getData(undefined, true);
    this.jobService.getJobsNew(undefined, true);
  }

  getData(pager = undefined, resetValues = false) {
    if (resetValues) {
      this.totalJobs = 0;
      this.currentPage = 0;
      this.totalPage = 1;
      this.jobs = [];
    }
    if (this.currentPage == this.totalPage) {
      // alert('abc');
      if (pager) pager.target.complete();
      return;
    }
    switch (this.jobCategoryIdOrQuery) {
      case 'newJobs':
        this.getNewJobs(pager);
        break;
      case 'jobsNearMe':
        this.getNearJobs(pager);
        break;
      case 'highSalaryJobs':
        this.getHighSalaryJobs(pager);
        break;

      default:
        // alert('new jobs');
        // this.jobService.resetFilters();
        this.jobService.getJobsNew(pager, true);
        // this.getAllJobs(pager);
        break;
    }
  }

  getNewJobs(pager = undefined) {
    if (pager) pager.target.complete();
    this.noJobsFound = false;
    this.dataService.present();
    // this.jobs = [];
    let query = qs.stringify({
      sort: ['createdAt:desc'],
      populate: this.populate,
      pagination: {
        page: this.currentPage + 1,
        pageSize: '10',
      },
      filters: {
        ...this.commonFilter,
        city: {
          $eq: this.dataService.profile.city || undefined,
        },
      },
    });

    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        if (data.meta) {
          this.totalJobs = data.meta.pagination.total;
          this.currentPage = data.meta.pagination.page;
          this.totalPage = data.meta.pagination.pageCount;
        }
        this.dataService.dismiss();
        this.jobs.push(...data.data);
        if (!this.jobs.length) {
          this.noJobsFound = true;
        }
      },
      (err) => {
        this.dataService.dismiss();
        alert('Connect Error');
      }
    );
  }
  getNearJobs(pager = undefined) {
    if (pager) pager.target.complete();
    this.noJobsFound = false;
    this.dataService.present();
    // this.jobs = [];
    let query = qs.stringify({
      sort: ['createdAt:desc'],

      pagination: { page: this.currentPage + 1, pageSize: '10' },
      // 'pagination[pageSize]': '30',
      filters: {
        ...this.commonFilter,
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        if (data.meta) {
          this.totalJobs = data.meta.pagination.total;
          this.currentPage = data.meta.pagination.page;
          this.totalPage = data.meta.pagination.pageCount;
        }
        this.dataService.dismiss();

        this.jobs.push(...data.data);
        // this.jobs = data.data;
        if (!this.jobs.length) {
          this.noJobsFound = true;
        }
      },
      (err) => {
        this.dataService.dismiss();
        alert('Connect Error');
      }
    );
  }

  call(job) {
    this.dataService.contact('call', '91' + job.attributes.contactNumber);
  }
  whatsapp(job) {
    this.dataService.contact('whatsapp', '91' + job.attributes.contactNumber);
  }
  getHighSalaryJobs(pager = undefined) {
    if (pager) pager.target.complete();
    this.noJobsFound = false;
    this.dataService.present();
    // this.jobs = [];
    let query = qs.stringify({
      sort: ['salaryUpto:desc'],
      populate: this.populate,
      pagination: { page: this.currentPage + 1, pageSize: '10' },
      // 'pagination[pageSize]': '30',
      filters: {
        ...this.commonFilter,
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        if (data.meta) {
          this.totalJobs = data.meta.pagination.total;
          this.currentPage = data.meta.pagination.page;
          this.totalPage = data.meta.pagination.pageCount;
        }
        this.dataService.dismiss();
        this.jobs.push(...data.data);
        if (!this.jobs.length) {
          this.noJobsFound = true;
        }
      },
      (err) => {
        this.dataService.dismiss();
        alert('Connect Error');
      }
    );
  }
  getAllJobs(pager = undefined) {
    if (pager) pager.target.complete();
    this.noJobsFound = false;
    this.dataService.present();
    // let jobCategoryId=
    // this.jobs = [];

    let query;
    // for job category
    let sort = {
      sort: ['createdAt:desc'],
    };
    if (isNaN(this.jobCategoryIdOrQuery)) {
      query = qs.stringify({
        ...sort,
        populate: this.populate,
        pagination: { page: this.currentPage + 1, pageSize: '10' },
        filters: {
          ...this.commonFilter,
          $or: [
            {
              title: {
                $contains:
                  this.jobCategoryIdOrQuery == 'any'
                    ? ''
                    : this.jobCategoryIdOrQuery,
              },
              city: {
                $contains: this.city,
              },
            },
          ],
        },
      });
    }

    // for direct query
    else {
      query = qs.stringify({
        ...sort,
        populate: this.populate,
        pagination: { page: this.currentPage + 1, pageSize: '10' },
        filters: {
          ...this.commonFilter,
          $or: [
            {
              jobCategory: {
                id: {
                  $eq: this.jobCategoryIdOrQuery,
                },
              },
              city: {
                $contains: this.city,
              },
            },
          ],
        },
      });
    }

    // querySTr;

    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        if (data.meta) {
          this.totalJobs = data.meta.pagination.total;
          this.currentPage = data.meta.pagination.page;
          this.totalPage = data.meta.pagination.pageCount;
        }
        this.dataService.dismiss();
        this.jobs.push(...data.data);
        if (!this.jobs.length) {
          this.noJobsFound = true;
        }
      },
      (err) => {
        this.dataService.dismiss();
        alert('Connect Error');
      }
    );
  }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
  loadData(event) {
    this.jobService.getJobsNew(event, false);

    // this.getData(event);
    // setTimeout(() => {
    // console.log('Done');
    // event.target.complete();
    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    // if (data.length === 1000) {
    //   event.target.disabled = true;
    // }
    //  }, 500);
  }
}
