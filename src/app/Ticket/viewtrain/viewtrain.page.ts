import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewtrain',
  templateUrl: './viewtrain.page.html',
  styleUrls: ['./viewtrain.page.scss'],
})
export class ViewtrainPage implements OnInit {


  slideOptss = {
    initialSlide: 3,
    slidesPerView: 2.5,
  }

  constructor() { }

  ngOnInit() {
  }

}
