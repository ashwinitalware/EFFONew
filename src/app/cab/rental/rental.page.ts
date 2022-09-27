import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {


  slides = [

    {
      label:'1 Hr',
      smalllabel:'10 Km'
    },
    {
      label:'2 Hr',
      smalllabel:'20 Km'
    },
    {
      label:'3 Hr',
      smalllabel:'30 Km'
    },
    {
      label:'5 Hr',
      smalllabel:'30 Km',
      link:'rental'
    },
    {
      label:'6 Hr',
      smalllabel:'40 Km'
      // label:'Transport(Goods Delivery)'
    },
    {
      label:'7 Hr',
      smalllabel:'50 Km'
      // label:'Transport(Goods Delivery)'
    },
    {
      label:'8 Hr',
      smalllabel:'60 Km'
      // label:'Transport(Goods Delivery)'
    },
    {
      label:'9 Hr',
      smalllabel:'70 Km'
      // label:'Transport(Goods Delivery)'
    },

  ]
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
