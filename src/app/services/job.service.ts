import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobQuery = '';
  jobCity = '';
  categories = [];
  jobs = [];

  jobFilters = {
    type: '',
  };

  constructor(public http: HttpClient, public dataService: DataService) {}
  getCategories() {
    this.http.get(this.dataService.apiUrl + 'job-categories').subscribe(
      (data: any) => {
        this.categories = data.data;
        for (let i = 0; i < this.categories.length; i++) {
          // this.categories[i].jobs = [];
          setTimeout(() => {
            this.getJobs(true, i);
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
}
