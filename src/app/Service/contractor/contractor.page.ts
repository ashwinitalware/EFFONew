import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.page.html',
  styleUrls: ['./contractor.page.scss'],
})
export class ContractorPage implements OnInit {

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
