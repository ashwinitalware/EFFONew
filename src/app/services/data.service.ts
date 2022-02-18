import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  domainUrl = 'http://localhost:1337/';
  apiUrl = this.domainUrl + 'api/';

  constructor() {}
}
