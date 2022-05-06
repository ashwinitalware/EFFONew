import { Component, OnInit } from '@angular/core';
import { OldExService } from 'src/app/services/old-ex.service';

@Component({
  selector: 'app-oldex-home',
  templateUrl: './oldex-home.page.html',
  styleUrls: ['./oldex-home.page.scss'],
})
export class OldexHomePage implements OnInit {

  constructor(public oldExService:OldExService) {

    this.oldExService.getCategories()

   }

  ngOnInit() {
  }
  categorySelected(category){

  }


}
