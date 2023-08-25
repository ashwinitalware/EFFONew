import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  bookings = []
  key
  itinKey = undefined
  tempSingleSeat
  charges = {
    total: 0
  }
  passengers = [{
    name: "",
    phone: ""
  }]
  selectedPick
  selectedDrop
  pick = []
  drop = []
  buses = []

  fromSuggestions = []

  toSuggestions = []
  history = []
  inputs = {
    from: "",
    fromCityId: "",
    to: "",
    toCityId: "",
    date: new Date().toISOString().split('T')[0],
    passenger: "1"
  }
  constructor(public dataService: DataService, public navCtrl: NavController, public router: Router) { }
  getBuses() {
    this.dataService.present()
    console.log('1..', this.inputs.date);
    console.log(new Date(this.inputs.date).toISOString().slice(0, 10));

    this.dataService._get('bus-cities-custom/searchBus', `from=${this.inputs.fromCityId}&to=${this.inputs.toCityId}&date=${new Date(this.inputs.date).toISOString().slice(0, 10)}&adt=${this.inputs.passenger}`).subscribe(d => {
      this.dataService.dismiss()
      this.buses = []
      if (!d.journeys.ONEWAY) return this.dataService.presentToast("No Bus Found")
      this.buses = d.journeys.ONEWAY
      // d.journeys.ONEWAY.forEach(element => {
      //   element.buses.forEach(bus => {
      //     this.buses.push({ ...bus, startingFrom: element.fares[0].paxFares.adt.total.amount })
      //   });

      // });
      console.log(this.buses);

      // d.journeys.ONEWAY
    }, err => {
      this.dataService.dismiss()
    })
  }
  busSelected(bus) {
    // on the basis of passengers
    this.key = bus.key

    this.pick = bus.buses[0].stops.pick
    this.drop = bus.buses[0].stops.drop
    console.log('picks', this.pick, this.drop);


    this.dataService.present()


    this.dataService._get('bus-cities-custom/getSeats/' + bus.key, '').subscribe(d => {
      this.dataService.dismiss()


      let seatObject = []
      this.tempSingleSeat = undefined
      this.charges.total = 0
      this.selectedPick = undefined
      this.selectedDrop = undefined

      // let passengers: number = +this.inputs.passenger
      // let passengers: number =1


      // TODO
      // add logic for seat selection for number of passengers
      d.deckData[0].seats.forEach(seat => {

        if (this.tempSingleSeat) return
        // if (passengers--)
        if (!seat.booked) {
          seatObject.push(seat.seatNo)
          this.tempSingleSeat = seat.seatNo
          this.charges.total += seat.fareDetails.paxFares.adt.total.amount
        }

      });
      // alert(tempSingleSeat)


      this.router.navigate(['bus-booking-review'])



    }, err => {
      this.dataService.dismiss()
    })
  }
  getBusReview(key, seatNo, pickId, dropId) {
    this.dataService.present()
    console.log(key, seatNo, pickId, dropId);

    // this.dataService.present()


    this.dataService._get('bus-cities-custom/busReview', `key=${key}&seatNo=${seatNo}&pickId=${pickId}&dropId=${dropId}`).subscribe(d => {
      this.dataService.dismiss()
      // this.busReviewDetails = d
      this.itinKey = d.itinKey
      // alert(this.itinKey)

      this.blockBooking()
    }, err => {
      this.dataService.dismiss()
    })
  };
  blockBooking() {
    this.dataService.present()
    this.dataService._post('bus-cities-custom/blockSeats', ``, {
      "itinKey": this.itinKey,
      "seatNo": this.tempSingleSeat,
      "pickId": this.selectedPick,
      "pickName": this.getStopName('pick', this.selectedPick),
      "dropId": this.selectedDrop,
      "dropName": this.getStopName('drop', this.selectedPick)
    }).subscribe(d => {
      this.dataService.dismiss()
      // this.busReviewDetails = d
      // this.itinKey=d.itinKey
      // alert(this.itinKey)
      console.log('block request', d);

      this.bookTicket()

    }, err => {
      this.dataService.dismiss()
    })
  }
  bookTicket() {
    this.dataService.present()
    this.dataService._post('bus-cities-custom/bookSeats', ``, {
      "itinKey": this.itinKey,

    }).subscribe(d => {
      this.dataService.dismiss()
      // this.busReviewDetails = d
      // this.itinKey=d.itinKey
      // alert(this.itinKey)
      console.log('booking ', d);
      // alert('Ticket Booked :  '+this.itinKey)
      this.dataService.present()
      this.dataService._post('bus-bookings', '', {
        data: {
          user: this.dataService.profile.id,
          itinKey: this.itinKey,
          viaStatus: 'confirmed'
        }
      }).subscribe(d => {
        this.dataService.dismiss()

        this.dataService.confirmSwal('Booking Confirmed : ' + this.itinKey)

        this.getAllBookings()
        this.navCtrl.back()
      })


    }, err => {
      this.dataService.dismiss()
    })
  }

  // this.dataService.present()


  // this.dataService._get('bus-cities-custom/busReview', `key=${key}&seatNo=${seatNo}&pickId=${pickId}&dropId=${dropId}`).subscribe(d => {
  //   this.busReviewDetails = d


  // }, err => {
  //   this.dataService.dismiss()
  // })
  // }
  confirmBooking() {
    let validPassengerDetails = true
    this.passengers.forEach(passenger => {

      if (!passenger.name || !passenger.phone)
        validPassengerDetails = false

    });
    if (!validPassengerDetails)
      return this.dataService.presentToast("Fill Passenger Details Properly")

    this.getBusReview(this.key, this.tempSingleSeat, this.selectedPick, this.selectedDrop)
  }
  getAllBookings() {
    this.bookings = []
    this.dataService._get('bus-bookings', 'sort=id:desc').subscribe(d => {
      this.bookings = d.data
      let i = 0
      this.bookings.forEach(booking => {
        this.getViaBookingDetails(i++, booking.attributes.itinKey)
      });
    })
    // this.dataService._get('bus-cities-custom/getBooking/'+)

  }
  getViaBookingDetails(index, id) {
    this.dataService._get('bus-cities-custom/getBooking/' + id, '').subscribe(d => {
      this.bookings[index].data = d
      console.log(d);

    })

  }
  searchCity(city, source) {

    console.log(city);


    if (!city) return
    if (city.length < 2) return

    this.dataService._get('bus-cities', 'filters[name][$contains]=' + city + '&pagination[pageSize]=5').subscribe(d => {


      if (source == 'from')
        this.fromSuggestions = d.data
      else
        this.toSuggestions = d.data




    })

  }

  resetSuggesions() {
    this.fromSuggestions = []
    this.inputs.fromCityId = ""
    this.toSuggestions = []
    this.inputs.toCityId = ""

  }
  getStopName(type, id) {
    let name = ''
    if (type == 'pick') {
      this.pick.forEach(stop => {
        if (stop.id == id)
          name = stop.name

      });
    } else {
      this.drop.forEach(stop => {
        if (stop.id == id)
          name = stop.name

      });
    }
  }
}
