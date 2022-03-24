import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceslisting',
  templateUrl: './serviceslisting.page.html',
  styleUrls: ['./serviceslisting.page.scss'],
})
export class ServiceslistingPage implements OnInit {

  switchTab = 'civil'
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor() { }

  ngOnInit() {
  }

  call() {
    window.open("tel:+917387378787");
  }
  whatsapp() {
    let text = "I am intersted in the service that you are providing"
    window.open(`https://wa.me/917387378787?text=${text}`, "_blank")
  }

}
