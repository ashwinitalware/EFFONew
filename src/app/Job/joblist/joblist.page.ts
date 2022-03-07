import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.page.html',
  styleUrls: ['./joblist.page.scss'],
})
export class JoblistPage implements OnInit {
  jobs = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    public jobService: JobService,
    public navCtrl: NavController,
    public http: HttpClient,
    public dataService: DataService
  ) {
    switch (this.activatedRoute.snapshot.params.categoryIdOrQuery) {
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
        this.getAllJobs(this.activatedRoute.snapshot.params.categoryIdOrQuery);
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
  getAllJobs(jobCategoryIdOrQuery) {
    // let jobCategoryId=
    this.jobs = [];
    this.http
      .post(this.dataService.domainUrl + 'graphql', {
        query: `query{

        jobPosts (

          filters:{

            ${
              isNaN(jobCategoryIdOrQuery)
                ? `title:{
                  contains:"${jobCategoryIdOrQuery}"
                }`
                : `jobCategory:{
              id:{
                eq:${jobCategoryIdOrQuery}
              }
            }`
            }

          }
        ){
          data{
            id
            attributes{
              skillsByComma
              companyName
              vacancies
              address
              salaryFrom
              salaryUpto
             author{
              data{
                 attributes{
                  job_profile{
                    data{
                      attributes{
                         companyName

                      }
                    }
                  }
                }
              }
            }
            }
          }
        }

      }`,
      })
      .subscribe((data: any) => {
        this.jobs = data.data.jobPosts.data;
        // this.categories[categoryIndex].jobs = data.data.jobPosts.data;
        // console.log(data.data.jobPosts.data);
      });
  }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
}
