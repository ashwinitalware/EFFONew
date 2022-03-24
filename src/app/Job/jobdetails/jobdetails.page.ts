import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';
import qs from 'qs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.page.html',
  styleUrls: ['./jobdetails.page.scss'],
})
export class JobdetailsPage implements OnInit {
  imageError = false;
  //applied
  //not
  jobApplied;
  data;
  skills = [];
  constructor(
    public navCtrl: NavController,
    public dataService: DataService,
    public jobService: JobService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getJobDetails();
    // this.jobAppliedCheck();
  }
  ionViewWillEnter() {
    this.jobAppliedCheck();
  }

  jobAppliedCheck() {
    //asdf
    const query = qs.stringify({
      populate: {
        author: {
          populate: '*',
        },
      },
      filters: {
        applicant: {
          id: {
            $eq: this.dataService.profile.id,
          },
        },
        jobPost: {
          id: {
            $eq: this.activatedRoute.snapshot.params.jobId + '',
          },
        },
      },
    });
    this.http
      .get(this.dataService.apiUrl + 'job-applications?' + query, {
        // params: {
        //   'filters[applicant][id][$eq]': this.dataService.profile.id + '',
        //   'filters[jobPost][id][$eq]':
        //     this.activatedRoute.snapshot.params.jobId + '',
        //   populate: '*',
        // },
      })
      .subscribe((data: any) => {
        this.jobApplied = data.data.length ? true : false;
      });
  }
  call(job) {
    this.dataService.contact('call', '91' + job.attributes.contactNumber);
  }
  whatsapp(job) {
    this.dataService.contact('whatsapp', '91' + job.attributes.contactNumber);
  }
  calculateSkills(skillsString) {
    console.log(skillsString);

    try {
      this.skills = skillsString.split(',');
    } catch (error) {
      console.log(error);

      this.skills = [];
    }
    console.log(this.skills);
  }
  share() {
    this.dataService.share(
      this.data.attributes.title,
      'View Job Details only on Effo App ! Download Today !',
      'https://play.google.com/store/apps/details?id=ionic.effo.starter'
    );
  }
  errorImage() {
    alert('asdf');
  }
  report() {
    window.open(
      'mailto:support@vendorclub.com' +
        '?subject=Job Report | Job ID : ' +
        this.data.id +
        '&body=I want to report this job because ....',
      '_system'
    );
  }
  apply() {
    if (this.jobApplied) {
      return;
    }
    if (this.jobApplied === false) {
      this.navCtrl.navigateForward(['/apply/' + this.data.id]);
    }
  }
  getJobDetails() {
    const query = qs.stringify({
      populate: {
        author: {
          populate: '*',
        },
      },
    });
    this.http
      .get(
        this.dataService.apiUrl +
          'job-posts/' +
          this.activatedRoute.snapshot.params.jobId +
          '?' +
          query,
        {
          // params: {
          //   populate: '*',
          // },
        }
      )
      .subscribe((data: any) => {
        this.data = data.data;
        this.calculateSkills(this.data.attributes.skillsByComma);
      });
  }
  getJobDetails2UsingGraphql() {
    //  +
    // this.activatedRoute.snapshot.params.jobId
    this.http
      .post(this.dataService.domainUrl + 'graphql', {
        query: `
          query{

            jobPosts (

              filters:{
                id:{
                  eq:${this.activatedRoute.snapshot.params.jobId}
                }
                # job_category:{
                #   id:{
                #     eq:1
                #   }
                # }
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
                  minimumEducation
                  english
                  experience
                  description
                  timings
                  workingDays
                  # job_post_skills{
                    # //   data{
                      #//    attributes{
                        # //      name
                        # //    }
                        #  //  }
                        # //  }
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
        this.data = data.data.jobPosts.data[0];
        console.log(this.data);
      });
  }

  ngOnInit() {}
}
