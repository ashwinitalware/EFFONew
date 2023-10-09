import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  suggestions = [

  ]

  searchId = undefined


  roomPaxDetails = [
    // {
    //   "paxDetails": [
    //     {
    //       "title": "Mr.",
    //       "passengerType": "ADULT",
    //       "lastName": "Vishni",
    //       "firstName": "Amrit"
    //     }
    //   ]
    // }
  ]

  // checkoutGuests = [

  // ]
  repriceResponse = undefined


  rooms = []
  hotels = [

  ]
  search = {
    destination: "",
    destinationId: "",
    checkIn: "",
    checkOut: "",
    guestRooms: [{
      adults: "1",
      child: "0"
    }]
  }

  constructor(public dataService: DataService, public router: Router) { }

  citySelected(city) {

    this.suggestions = []

    this.search.destination = city.attributes.city
    this.search.destinationId = city.attributes.cityId



  }
  searchHotels() {
    this.hotels = []
    console.log(this.search);
    let requestObj = {
      "checkInDate": new Date(this.search.checkIn).toISOString().slice(0, 10),
      "checkOutDate": new Date(this.search.checkOut).toISOString().slice(0, 10),
      "regionIds": [
        "5C" + this.search.destinationId
      ],
      "rooms": [
        // {
        //   "adults": "2",
        //   "children": "0",
        //   "childrenAges": [

        //   ]
        // }
      ]

    }

    this.search.guestRooms.forEach(element => {
      let numberOfChilds = +element.child
      let childrenAges = []
      let ages = []
      if (element.child) {
        while (numberOfChilds--) {
          childrenAges.push(10)
        }

      }
      requestObj.rooms.push(
        {
          "adults": element.adults,
          "children": element.child,
          childrenAges
        }
      )

    });

    console.log(requestObj);

    this.dataService.present()
    // ${new Date(this.inputs.date).toISOString().slice(0, 10)}
    this.dataService._post(`hotel-bookings/search`, "", requestObj).subscribe(d => {
      this.dataService.dismiss()

      this.searchId = d.data.searchId
      this.hotels = d.data.hotelResults
    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something Went wrong")
    })

  }
  getReprice(itinKey) {
    this.repriceResponse = undefined
    this.dataService.present()
    this.dataService._post(`hotel-bookings/reprice`, "", {
      "itineraryKey": itinKey
    }).subscribe(d => {
      this.dataService.dismiss()

      this.repriceResponse = d
      this.repriceSyncGuests()
    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something Went wrong")
    })
  }
  searchCity(citySearchQuery) {
    console.log(citySearchQuery);


    if (!citySearchQuery) return
    if (citySearchQuery.length < 2) return

    this.dataService._get('hotel-cities', 'filters[city][$contains]=' + citySearchQuery + '&pagination[pageSize]=5').subscribe(d => {



      this.suggestions = d.data






    })
  }

  addRoom() {
    this.search.guestRooms.push({
      adults: "1",
      child: "0"
    })
  }
  removeRoom() {
    this.search.guestRooms.pop()
  }
  getrooms(searchId, hotelId) {
    this.rooms = []
    this.dataService.present()
    // ${new Date(this.inputs.date).toISOString().slice(0, 10)}
    this.dataService._post(`hotel-bookings/getRooms`, "", {
      searchId,
      "hotelIds": [
        hotelId
      ]
    }).subscribe(d => {
      this.dataService.dismiss()

      this.rooms = d.data.rooms[hotelId]
    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something Went wrong")
    })

  }
  repriceSyncGuests() {
    // {
    //   "paxDetails": [
    //     {
    //       "title": "Mr.",
    //       "passengerType": "ADULT",
    //       "lastName": "Vishni",
    //       "firstName": "Amrit"
    //     }
    //   ]
    // }
    this.roomPaxDetails = []
    let i = 0
    this.repriceResponse.data.searchInfo.rooms.forEach(room => {
      this.roomPaxDetails.push({
        paxDetails: []
      })

      // alert(i)
      let guestNumber = 0
      room.adults.forEach(adult => {
        if (adult.nameRequired)
          this.roomPaxDetails[i].paxDetails.push({
            text: `Room ${i + 1} : Guest Details ${++guestNumber}`

            ,
            "title": "",
            "passengerType": "ADULT",
            "lastName": "",
            "firstName": ""
          })

      });
      room.children.forEach(children => {

        if (children.nameRequired)
          this.roomPaxDetails[i].paxDetails.push({
            text: `Room ${i + 1} : Children Details`
            ,
            "title": "Mr.",
            "passengerType": "CHILD",
            "lastName": "",
            "firstName": ""
          })

      });
      i++
    });
    console.log(this.roomPaxDetails);

  }
  book() {
    alert("Payment Gateway")
    let block = false
    if (this.repriceResponse.data.Z?.isBlockable)
      block = this.repriceResponse.data.Z.isBlockable
    let bookingObject = {
      "user": this.dataService.profile.id,
      "bookingKey": this.repriceResponse.data.bookingKey,
      "block": block,
      "deliveryData": {
        "mobile": this.dataService.profile.phone,
        "email": "vaibhav.fuke1999@gmail.com"
      },
      "roomPaxDetails": this.roomPaxDetails
      ,
      // "roomPaxDetails": [
      //   {
      //     "paxDetails": [
      //       {
      //         "title": "Mr.",
      //         "passengerType": "ADULT",
      //         "lastName": "Vishni",
      //         "firstName": "Amrit"
      //       }
      //     ]
      //   }
      // ],
      "productType": "HOTEL",
      "payment": {
        "paymentMode": "DEPOSIT",
        "paymentSubType": "3",
        "productType": "HOTEL"
      }
    }

    console.log(bookingObject);

    this.dataService._post(`hotel-bookings/book`, "", bookingObject).subscribe(d => {
      this.dataService.dismiss()

      if (d.result.status) {
        this.dataService.presentToast("Thanks for booking", 'success')
        this.router.navigate(['/hotel-dashboard'])
      } else {
        this.dataService.presentToast("Something Went wrong", 'danger')
      }
      // FMNJH1IQS0KOF


    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something Went wrong")
    })
  }
}
