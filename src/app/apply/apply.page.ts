import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const Swal: any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  confirmOrder() {
    const swalWithBootstrapButtons = Swal.mixin({});
    swalWithBootstrapButtons.fire({
      title: 'Successfully Applied',
      text: '',
      timer: 3000,
      icon: 'success',
    });
    // this.router.navigate(['/login']);
  }
}
