import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceslisting',
  templateUrl: './serviceslisting.page.html',
  styleUrls: ['./serviceslisting.page.scss'],
})
export class ServiceslistingPage implements OnInit {

  switchTab = 'civil'

  router: any;
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  categories = [
    {
      name: 'Ridge Appliance',
      image: 'assets/services/cc1.jpg',
      icon: 'location-outline',
      address: 'Dhayari phata,Dhayari,Pune.',
      link: '/servicedeatils',
      available: true,
    },
    {
      name: 'Technopliance',
      image: 'assets/services/cc2.jpg',
      icon: 'location-outline',
      address: 'Dhayari phata,Dhayari,Pune.',
      link: '',
    },
    {
      name: 'Max Appliance',
      image: 'assets/services/cc3.jpg',
      icon: 'location-outline',
      address: 'Dhayari phata,Dhayari,Pune.',
      link: '',
    },
    {
      name: 'Absolute Appliance',
      image: 'assets/services/cc4.jpeg',
      icon: 'location-outline',
      address: 'Dhayari phata,Dhayari,Pune.',
      link: '',
    },
    {
      name: 'Efficappliance',
      image: 'assets/services/c2.jpg',
      icon: 'location-outlinee',
      address: 'Dhayari phata,Dhayari,Pune.',
      link: '',
    },
  ];

  constructor() { }


  ngOnInit() {
  }

  // navigate(listing) {
  //   if (listing.link) {
  //     this.router.navigate(['/' + listing.link])
  //   }

  //   else {
  //     alert('Coming Soon')
  //   }
  // }


  navigate(listing) {
    if (listing.link) {
      this.router.navigate(['/' + listing.link])
    }

    else {
      alert('Coming Soon')
    }
  }

  call() {
    window.open("tel:+917387378787");
  }
  whatsapp() {
    let text = "I am intersted in the service that you are providing"
    window.open(`https://wa.me/917387378787?text=${text}`, "_blank")
  }

}
