import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  charges = {
    extraPercentage: 1.1
  }
  selectectedHotel
  imageRetrived = false
  suggestions = [

  ]
  filters = {
    name: "",
    sort: ""
  }

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
  hotelReviewImages = {
    "0.0": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/0.0-16840-5.png",
    "0.5": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/0.5-16840-5.png",
    "1.0": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/1.0-16840-5.png",
    "2.0": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/2.0-16840-5.png",
    "4.0": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-16840-5.png",
    "4.5": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-16840-5.png",
    "2.5": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/2.5-16840-5.png",
    "5.0": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/5.0-16840-5.png",
    "1.5": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/1.5-16840-5.png",
    "3.0": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.0-16840-5.png",
    "3.5": "www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-16840-5.png"
  }
  hotelBaseImage = 'https://images4.via.com/static/hotel/images/'
  hotels = [
  ]
  // hotels = [

  // ]
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

  constructor(public dataService: DataService, public router: Router, public iab: InAppBrowser) { }

  citySelected(city) {

    this.suggestions = []

    this.search.destination = city.attributes.city
    this.search.destinationId = city.attributes.cityId



  }
  searchHotels(pageContent) {
    if (!this.search.destinationId)
      return this.dataService.presentToast("Invalid Search")
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


      this.imageRetrived = false
      // GET HOTEL DETAILS
      this.dataService.present()
      this.dataService._get('hotel-bookings/details/' + "5C" + this.search.destinationId, "").subscribe(data => {
        data.data.content.forEach(hotelDetails => {
          this.dataService.dismiss()
          this.imageRetrived = true

          console.log(hotelDetails);
          this.hotels.forEach(hotel => {
            if (hotel.hotelInfo.hotelId == hotelDetails.hotelId)
              hotel.hotelDetails = hotelDetails

          });
          if (this.hotels.length)
            pageContent.scrollToPoint(0, 300, 200);

        });
      }, err => {
        this.dataService.dismiss()
        this.dataService.presentToast("Error getting hotel data...")
      })

    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something Went wrong")
    })

  }

  async payment() {

    console.log(this.roomPaxDetails);

    let valid = true
    // validate guest details
    this.roomPaxDetails.forEach(room => {
      room.paxDetails.forEach(pax => {
        if (!pax.title || !pax.firstName || !pax.lastName)
          valid = false
      });

    });
    if (!valid)
      return this.dataService.presentToast("Invalid Guest Details")

    // this.blockBooking()

    let finalAmount = parseInt((this.repriceResponse.data.hotelResult.roomResults[0].ratePlans[0].pricing.totalSellPrice * this.charges.extraPercentage) + "")

    // if (this.coupon.couponDiscountedTotal)
    //   finalAmount = this.coupon.couponDiscountedTotal
    // this.busService.coupon.couponDiscountedTotal
    let browser = this.iab.create(`https://effoapp.com/payment/payment_v1.html?billing_email=${this.dataService.profile.email}&billing_tel=${this.dataService.profile.phone}&order_id=123&amount=${finalAmount}`)
    browser.on('loadstop').subscribe(d => {
      console.log('loadstop', d);
      // if (d.url.includes('ccavResponseHandler')) {
      if (d.url.includes('api/payments/success')) {
        browser.close()
        // alert("Payment")
        this.dataService.presentToast("Payment Successfull, We are confirming booking !")
        // this.navCtrl.navigateForward(['/'])
        this.book()
        // this.getBusReview(this.key, this.seatsSelected, this.selectedPick, this.selectedDrop)
      } else if (d.url.includes('cancel') || d.url.includes('api/payments/fail')) {
        browser.close()
        // alert("Payment")
        this.dataService.presentToast("Payment Failed . Please contact us !")
      }
      // if (d.url.includes('cancel')) {
      //   browser.close()
      //   // alert("Payment")
      //   this.dataService.presentToast("Payment Cancelled")
      //   // this.navCtrl.navigateForward(['/'])
      // }

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

  filter() {
    console.log(this.hotels);
    if (this.filters.sort == 'low')
      this.hotels.sort((busA, busB) => {
        // Replace 'capacity' with the property you want to sort by
        return +busB.lowestPriceData?.pricing?.roomNightSellPrice - (+busA.lowestPriceData?.pricing?.roomNightSellPrice); // Sorting by capacity in ascending order
      });

    else if (this.filters.sort == 'high') {
      this.hotels.sort((busA, busB) => {
        // Replace 'capacity' with the property you want to sort by
        return +busA.lowestPriceData?.pricing?.roomNightSellPrice - (+busB.lowestPriceData?.pricing?.roomNightSellPrice);// Sorting by capacity in ascending order
      });
    }
    // if (!this.filters.name) {
    //   this.filteredBuses = this.buses
    //   return
    // }

    // this.filteredBuses = this.buses.filter(bus => {
    //   // Your condition here, for example:
    //   return bus.buses[0].operatorName.toLowerCase().includes(this.filters.name.toLowerCase()) // Filtering buses with capacity greater than or equal to 50
    // });
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
