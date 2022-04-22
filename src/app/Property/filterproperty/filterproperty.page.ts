import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterproperty',
  templateUrl: './filterproperty.page.html',
  styleUrls: ['./filterproperty.page.scss'],
})
export class FilterpropertyPage implements OnInit {
  type = 'looking'
  constructor() { }

  ngOnInit() {
  }

}
