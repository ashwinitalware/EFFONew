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
  jobs = [];
  jobCategoryIdOrQuery;
  city;
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
    this.jobCategoryIdOrQuery =
      this.activatedRoute.snapshot.params.categoryIdOrQuery;

    this.city = this.activatedRoute.snapshot.params.city;
    switch (this.jobCategoryIdOrQuery) {
      case 'newJobs':
        this.getNewJobs();
        break;
      case 'jobsNearMe':
        this.getNearJobs();
        break;
      case 'highSalaryJobs':
        this.getHighSalaryJobs();
        break;

      default:
        this.getAllJobs();
        break;
    }
  }

  getNewJobs() {
    this.dataService.present();
    this.jobs = [];
    let query = qs.stringify({
      sort: ['createdAt:desc'],
      populate: this.populate,
      pagination: {
        pageSize: '30',
      },
      filters: {
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        this.dataService.dismiss();
        this.jobs = data.data;
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
  getNearJobs() {
    this.dataService.present();
    this.jobs = [];
    let query = qs.stringify({
      sort: ['createdAt:desc'],

      pagination: {
        pageSize: '30',
      },
      // 'pagination[pageSize]': '30',
      filters: {
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        this.dataService.dismiss();
        this.jobs = data.data;
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
  getHighSalaryJobs() {
    this.dataService.present();
    this.jobs = [];
    let query = qs.stringify({
      sort: ['salaryUpto:desc'],
      populate: this.populate,
      pagination: {
        pageSize: '30',
      },
      // 'pagination[pageSize]': '30',
      filters: {
        city: {
          $eq: this.dataService.profile.city + '',
        },
      },
    });
    this.http.get(this.dataService.apiUrl + 'job-posts?' + query).subscribe(
      (data: any) => {
        this.dataService.dismiss();
        this.jobs = data.data;
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
  getAllJobs() {
    this.dataService.present();
    // let jobCategoryId=
    this.jobs = [];

    let query;
    // for job category
    let sort = {
      sort: ['createdAt:desc'],
    };
    if (isNaN(this.jobCategoryIdOrQuery)) {
      query = qs.stringify({
        ...sort,
        populate: this.populate,

        filters: {
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
        filters: {
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
        this.dataService.dismiss();
        this.jobs = data.data;
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
}
