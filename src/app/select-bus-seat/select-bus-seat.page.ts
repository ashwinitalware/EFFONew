import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-bus-seat',
  templateUrl: './select-bus-seat.page.html',
  styleUrls: ['./select-bus-seat.page.scss'],
})
export class SelectBusSeatPage implements OnInit {
  upperSeatsArray = []
  lowerSeatsArray = []

  constructor(public busService: BusService, public ds: DataService, public router: Router) {

    this.busService.seatsSelected = []


    for (let x = 0; x < this.busService.seatMap.deckData[0].busConfig.x; x++) {
      this.lowerSeatsArray.push([])
      for (let y = 0; y < this.busService.seatMap.deckData[0].busConfig.y; y++) {
        this.lowerSeatsArray[x].push({
          seat: false,
          // forX: x,
          // forY: y
        })
      }
    }


    for (let x = 0; x < this.busService.seatMap.deckData[1].busConfig.x; x++) {
      this.upperSeatsArray.push([])
      for (let y = 0; y < this.busService.seatMap.deckData[1].busConfig.y; y++) {
        this.upperSeatsArray[x].push({
          isDeck: false,
          // forX: x,
          // forY: y
        })
      }
    }
    this.busService.seatMap.deckData[0].seats.forEach(seat => {
      this.lowerSeatsArray[seat.seatPos.y][seat.seatPos.x] = { seat: true, ...seat }
    });
    this.busService.seatMap.deckData[1].seats.forEach(seat => {
      this.upperSeatsArray[seat.seatPos.y][seat.seatPos.x] = { seat: true, ...seat }
    });

    console.log(this.lowerSeatsArray);





  }

  ngOnInit() {
  }

  selectSeat(whichDeck, i, j) {
    // if()
    console.log(this[whichDeck][i][j]);

    if (this[whichDeck][i][j].booked)
      return this.ds.presentToast('Seat already bookd')




    // if (whichDeck == 0) {

    if (this[whichDeck][i][j].selected) {

      //remove seat

      this[whichDeck][i][j].selected = false

      this.busService.seatsSelected = this.busService.seatsSelected.filter(seat => seat !== this[whichDeck][i][j].seatNo);

      // this.ds.presentToast('Seat Removed')
    } else {
      if (+this.busService.inputs.passenger == this.busService.seatsSelected.length)
        return this.ds.presentToast('Maximum ' + this.busService.inputs.passenger + " Seat(s) can be selected")


      this[whichDeck][i][j].selected = true
      // this.ds.presentToast('Seat Selected')

      this.busService.seatsSelected.push(this[whichDeck][i][j].seatNo)

    }



    // }
    // else {
    //   this.upperSeatsArray[i][j].selected = true
    // }
    console.log(whichDeck, ',,,', this[whichDeck], this.busService.seatsSelected);

    // this.busService.seatMap.deckData[whichDeck].
  }

  confirmSeats() {

    console.log('selected seats', this.busService.seatsSelected);

    this.router.navigate(['/bus-booking-review'])
  }
}
