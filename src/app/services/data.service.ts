import { Injectable } from '@angular/core';
declare const Swal: any;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  profile = {
    id: 1,
  };
  domainUrl = 'http://localhost:1337/';
  apiUrl = this.domainUrl + 'api/';

  constructor() {}

  swal(title, text, icon, timer = 4000) {
    const swalWithBootstrapButtons = Swal.mixin({});
    swalWithBootstrapButtons.fire({
      title,
      text,
      timer,
      icon,
    });
    // this.router.navigate(['/login']);
  }
}
