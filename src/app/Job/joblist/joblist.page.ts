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
    this.http
      .get(this.dataService.apiUrl + 'job-posts', {
        params: {
          sort: 'createdAt:desc',
          'pagination[pageSize]': '10',
        },
      })
      .subscribe((data: any) => {
        this.jobs = data.data;
      });
  }
  getNearJobs() {
    this.http
      .get(this.dataService.apiUrl + 'job-posts', {
        params: {
          'filters[city][$eq]': this.dataService.profile.city,
          'pagination[pageSize]': '10',
        },
      })
      .subscribe((data: any) => {
        this.jobs = data.data;
      });
  }
  getHighSalaryJobs() {
    this.http
      .get(this.dataService.apiUrl + 'job-posts', {
        params: {
          sort: 'salaryUpto:desc',
          'pagination[pageSize]': '10',
        },
      })
      .subscribe((data: any) => {
        this.jobs = data.data;
      });
  }
  getAllJobs() {
    this.dataService.present();
    // let jobCategoryId=
    this.jobs = [];

    let query;
    if (isNaN(this.jobCategoryIdOrQuery)) {
      query = qs.stringify({
        populate: '*',

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
    } else {
      query = qs.stringify({
        populate: '*',
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

    // this.http
    //   .post(this.dataService.domainUrl + 'graphql', {
    //     query: `query{

    //     jobPosts (

    //       filters:{

    //         ${
    //           isNaN(jobCategoryIdOrQuery)
    //             ? `title:{
    //               contains:"${jobCategoryIdOrQuery}"
    //             }`
    //             : `jobCategory:{
    //           id:{
    //             eq:${jobCategoryIdOrQuery}
    //           }
    //         }`
    //         }

    //       }
    //     ){
    //       data{
    //         id
    //         attributes{
    //           skillsByComma
    //           companyName
    //           vacancies
    //           address
    //           title
    //           salaryFrom
    //           salaryUpto
    //          author{
    //           data{
    //              attributes{
    //               job_profile{
    //                 data{
    //                   attributes{
    //                      companyName

    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //         }
    //       }
    //     }

    //   }`,
    //   })
    //   .subscribe((data: any) => {
    //     this.jobs = data.data.jobPosts.data;
    //     // this.categories[categoryIndex].jobs = data.data.jobPosts.data;
    //     // console.log(data.data.jobPosts.data);
    //   });
  }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
}
