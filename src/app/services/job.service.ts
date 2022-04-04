import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import qs from 'qs';
@Injectable({
  providedIn: 'root',
})
export class JobService {
  noJobsFound = false;

  categories = [];
  jobs = [];
  totalJobs = 0;
  currentPage = 0;
  totalPage = 1;
  jobFilters = {
    type: '',
    salary: {
      min: 0,
      max: 1000000,
    },
    jobCategoryId: undefined,
    sort: ['createdAt:desc'],
    title: '',
    city: '',
    experience: '',
  };

  constructor(public http: HttpClient, public dataService: DataService) {}
  getCategories() {
    this.http.get(this.dataService.apiUrl + 'job-categories').subscribe(
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
  getJobs(onlyFive = true, categoryIndex) {
    if (onlyFive) {
      this.http
        .post(this.dataService.domainUrl + 'graphql', {
          query: `
      query{

        jobPosts(

          filters:{

            jobCategory:{
              id:{
                eq:${this.categories[categoryIndex].id}
               }
             }
          }

        ){
          data{
            id
            attributes{
              title
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
          this.categories[categoryIndex].jobs = data.data.jobPosts.data;
          alert();
          console.log(data.data.jobPosts.data);
        });
    } else {
      this.http.get(this.dataService.apiUrl + 'job-categories').subscribe(
        (data: any) => {},
        (err) => {
          alert('Connection Error');
        }
      );
    }
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

  getJobsNew(pager = undefined, firstTime = false) {
    if (firstTime) {
      this.currentPage = 0;
    }
    if (pager) {
      pager.target.complete();
    }
    this.noJobsFound = false;
    this.dataService.present();
    const query = qs.stringify({
      sort: this.jobFilters.sort,
      populate: {
        author: {
          populate: '*',
        },
        jobCategory: '*',
      },
      pagination: {
        page: this.currentPage + 1,
        pageSize: '10',
      },
      filters: {
        expiry: {
          $gt: new Date().toISOString(),
        },
        salaryFrom: {
          $gte: this.jobFilters.salary.min,
        },
        type: {
          $eq: this.jobFilters.type || undefined,
        },
        experience: {
          $eq: this.jobFilters.experience || undefined,
        },

        $or: [
          {
            title: {
              $containsi: this.jobFilters.title + '',
            },
          },
          {
            skillsByComma: {
              $containsi: this.jobFilters.title + '',
            },
          },
          {
            jobCategory: {
              name: {
                // $containsi: 'it industry',
                $contains: this.jobFilters.title + '',
              },
              // id: {
              //   $eq: this.jobFilters.jobCategoryId,
              // },
            },
          },
        ],

        city: {
          $containsi: this.jobFilters.city + '',
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

        // const initialJobsLength=this.jobs?(this.jobs.length-1):0
        if (firstTime) {
          this.jobs = data.data;
        } else {
          this.jobs.push(...data.data);
        }

        // this.jobStatus(this.jobs);

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
  resetFilters() {
    this.jobFilters = {
      type: '',
      salary: {
        min: 0,
        max: 1000000,
      },
      experience: '',
      jobCategoryId: undefined,
      sort: ['createdAt:desc'],
      title: '',
      city: '',
    };
  }
  resetOtherFilters() {
    // reset everything except title, city
    this.jobFilters.type = '';
    this.jobFilters.experience = '';
    this.jobFilters.jobCategoryId = undefined;
    this.jobFilters.salary.min = 0;
    this.jobFilters.salary.max = 1000000;
  }

  jobViewed(jobs) {
    jobs.forEach((job) => {
      job.applied = true;
    });

    const query = qs.stringify({
      sort: this.jobFilters.sort,
    });
  }
}
