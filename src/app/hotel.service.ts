import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  suggestions = [

  ]
  rooms = []
  searchId
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

  constructor(public dataService: DataService) { }

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

      this.hotels = d.data.hotelResults
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
}
