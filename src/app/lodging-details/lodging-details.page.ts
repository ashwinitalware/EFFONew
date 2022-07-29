import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import qs from 'qs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lodging-details',
  templateUrl: './lodging-details.page.html',
  styleUrls: ['./lodging-details.page.scss'],
})
export class LodgingDetailsPage implements OnInit {
  data;
  rooms = [];
  checkIn;
  checkOut;
  constructor(
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.getLodgeDetails();
  }

  ngOnInit() {}

  getLodgeDetails() {
    let query = qs.stringify({
      filters: {
        vendor: {
          // id: {
          //   $eq:this.dataService.profile.city
          // }
        },
      },
      populate: '*',
    });
    this.dataService
      ._get(
        'lodging-profiles/' + this.activatedRoute.snapshot.params.lodgeId,
        query
      )
      .subscribe((data) => {
        this.data = data.data;
        this.getRooms(this.data.attributes.vendor.data.id);
      });
  }
  getRooms(vendorId) {
    let query = qs.stringify({
      filters: {
        vendor: {
          id: {
            $eq: vendorId,
          },
        },
      },
      populate: '*',
    });
    this.dataService._get('lodging-rooms/', query).subscribe((data) => {
      this.rooms = data.data;
      this.rooms.forEach((room) => {
        room.quantity = 0;
      });
    });
  }
  add(index) {
    this.rooms[index].quantity++;
  }
  remove(index) {
    this.rooms[index].quantity--;
  }
  book() {
    if (!this.checkIn)
      return this.dataService.presentToast('Select check in date');
    if (!this.checkOut)
      return this.dataService.presentToast('Select check out date');
  }
}
