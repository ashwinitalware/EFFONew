import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-dashboard',
  templateUrl: './food-dashboard.page.html',
  styleUrls: ['./food-dashboard.page.scss'],
})
export class FoodDashboardPage implements OnInit {

  slider: any;
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  items = ["Food/food2.jpg", "Food/food1.jpg", "Food/food3.jpg", "Food/food.png", "Food/s1-min.jpg"];

  constructor() { }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }


  ngOnInit() {
  }

}
