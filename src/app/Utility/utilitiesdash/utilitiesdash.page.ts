import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilitiesdash',
  templateUrl: './utilitiesdash.page.html',
  styleUrls: ['./utilitiesdash.page.scss'],
})
export class UtilitiesdashPage implements OnInit {
  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    autoplay: true
  };


  categories = [
    {
      name: 'Book Cylinder',
      image: 'assets/Utility/gas.png',
      icon: '',
      link: 'selectcylinder',
      available: true,
    },
    {
      name: 'Piped Gas',
      image: 'assets/Utility/piped-gas.png',
      icon: 'sparkles',
      link: 'selectpipedgas',
      available: true,
    },
    {
      name: 'Water',
      image: 'assets/Utility/water.png',
      icon: 'construct',
      link: '',
    },
    {
      name: 'Electricity',
      image: 'assets/Utility/light.png',
      icon: 'bag-handle',
      link: '',
    },
    {
      name: 'Postpaid',
      image: 'assets/Utility/phone.png',
      icon: 'desktop',
      link: '',
    },
    {
      name: 'Broadband/ Landline',
      image: 'assets/Utility/broadband.png',
      icon: 'school',
      link: '',
    },
    {
      name: 'Education Fees',
      image: 'assets/Utility/education.png',
      link: '',
      icon: 'home',
    },
    {
      name: 'Rent Payment',
      image: 'assets/Utility/home.png',
      link: '',
      icon: 'people',
    },
    // {
    //   name: 'Vehicle',
    //   image: '',
    //   link: '',
    //   icon: 'car-sport',
    // },
  ]


  constructor(
    public router: Router,
  ) { }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }
  ngOnInit() {
  }

  navigate(category) {

    this.router.navigate(['/' + category.link])
  }

}
