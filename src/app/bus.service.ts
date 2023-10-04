import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { Browser } from '@capacitor/browser';
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";

@Injectable({
  providedIn: 'root'
})
export class BusService {
  meta = {
    busTaxValueMultiplier: 1.05,
    taxPercentage: 5
  }
  coupon = {
    coupon: "",
    couponDiscountedTotal: 0,
    discountText: ""
  }
  selectedPickupName
  selectedDropName
  cancellationPolicy
  departureTime
  arrivalTime
  busReviewDetails
  selectedBusDetails
  filters = {
    name: "",
    sort: ""
  }
  seatsSelected = []
  seatMap = {
    "deckData": [
      {
        "busConfig": {
          "x": 5,
          "y": 4
        },
        "seats": [
          {
            "seatNo": "3L",
            "seatPos": {
              "x": 3,
              "y": 0
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "2L",
            "seatPos": {
              "x": 1,
              "y": 0
            },
            "booked": true,
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "1L",
            "seatPos": {
              "x": 0,
              "y": 0
            },
            "booked": true,
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "9L",
            "seatPos": {
              "x": 3,
              "y": 1
            },
            "booked": true,
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "8L",
            "seatPos": {
              "x": 1,
              "y": 1
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "7L",
            "seatPos": {
              "x": 0,
              "y": 1
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "15L",
            "seatPos": {
              "x": 3,
              "y": 2
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "14L",
            "seatPos": {
              "x": 1,
              "y": 2
            },
            "booked": true,
            "overrideTypes": [
              "FEMALE"
            ],
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "13L",
            "seatPos": {
              "x": 0,
              "y": 2
            },
            "booked": true,
            "overrideTypes": [
              "FEMALE"
            ],
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "21L",
            "seatPos": {
              "x": 3,
              "y": 3
            },
            "booked": true,
            "overrideTypes": [
              "FEMALE"
            ],
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "20L",
            "seatPos": {
              "x": 1,
              "y": 3
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "19L",
            "seatPos": {
              "x": 0,
              "y": 3
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "27L",
            "seatPos": {
              "x": 3,
              "y": 4
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "26L",
            "seatPos": {
              "x": 1,
              "y": 4
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "25L",
            "seatPos": {
              "x": 0,
              "y": 4
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          }
        ]
      },
      {
        "busConfig": {
          "x": 5,
          "y": 4
        },
        "seats": [
          {
            "seatNo": "4U",
            "seatPos": {
              "x": 3,
              "y": 0
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "5U",
            "seatPos": {
              "x": 1,
              "y": 0
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "6U",
            "seatPos": {
              "x": 0,
              "y": 0
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "10U",
            "seatPos": {
              "x": 3,
              "y": 1
            },
            "booked": true,
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "11U",
            "seatPos": {
              "x": 1,
              "y": 1
            },
            "booked": true,
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "12U",
            "seatPos": {
              "x": 0,
              "y": 1
            },
            "booked": true,
            "seatType": "SLEEPER",
            "isVertical": false
          },
          {
            "seatNo": "16U",
            "seatPos": {
              "x": 3,
              "y": 2
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "17U",
            "seatPos": {
              "x": 1,
              "y": 2
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "18U",
            "seatPos": {
              "x": 0,
              "y": 2
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "22U",
            "seatPos": {
              "x": 3,
              "y": 3
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "23U",
            "seatPos": {
              "x": 1,
              "y": 3
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "24U",
            "seatPos": {
              "x": 0,
              "y": 3
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "28U",
            "seatPos": {
              "x": 3,
              "y": 4
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "29U",
            "seatPos": {
              "x": 1,
              "y": 4
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "30U",
            "seatPos": {
              "x": 0,
              "y": 4
            },
            "booked": false,
            "seatType": "SLEEPER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "tax": {
                    "amount": 0
                  },
                  "comm": {
                    "amount": 0
                  },
                  "base": {
                    "amount": 1045.8
                  },
                  "GST": {
                    "amount": 49.8
                  },
                  "disc": {
                    "amount": 0
                  },
                  "total": {
                    "amount": 1045.8
                  }
                }
              }
            },
            "isVertical": false
          }
        ]
      }
    ],
    "busStops": {
      "pick": [
        {
          "id": 59710,
          "name": "Panchvati Square",
          "contact": "07212553868",
          "landmark": "Panchvati Square",
          "address": "Panchvati Square Amravati Maharashtra 07212553868 8668322815 9326418519",
          "time": "05:30 AM"
        }
      ],
      "drop": [
        {
          "id": 59702,
          "name": "Wadi Khadgaon Road Turning ",
          "contact": "07122550701",
          "landmark": "Wadi ",
          "address": "Opp Payal Hotel Chouhan Travels",
          "time": "07:31 AM"
        },
        {
          "id": 59706,
          "name": "Ravi Nagar Opp Agrasen Chhatravas ",
          "contact": "07122558822",
          "landmark": "Sanjay Travels Opp Agrasen Chhatravas",
          "address": "Sanjay Travels Opp Agrasen Chhtravas Ravi Nagar Nagpur Maharashtra 07122558822 9604699240",
          "time": "07:41 AM"
        },
        {
          "id": 33630,
          "name": "DHARAMPETH ",
          "contact": "07122558822",
          "landmark": "Dharampeth",
          "address": "Dharampeth",
          "time": "07:51 AM"
        },
        {
          "id": 71775,
          "name": "Sita Wadi Sqaure Near Police Station ",
          "contact": "07314099696",
          "landmark": "Sita Wadi Sqaure Near Police Station",
          "address": "Sita Wadi Sqaure Near Police Station ",
          "time": "08:01 AM"
        }
      ]
    },
    "dropPointRequired": true
  }
  bookings = []
  key
  itinKey = undefined
  tempSingleSeat
  charges = {
    total: 0
  }
  passengers = [{
    title: 'Mr',
    name: "",
    age: ""
  }]
  selectedPick
  selectedDrop
  pick = []
  drop = []
  buses = []
  filteredBuses = []

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
  constructor(public dataService: DataService, public navCtrl: NavController, public router: Router, public iab: InAppBrowser) { }
  async payment() {

    // this.blockBooking()

    let finalAmount = this.busReviewDetails.fares.paxFares.adt.total.amount
    if (this.coupon.couponDiscountedTotal)
      finalAmount = this.coupon.couponDiscountedTotal
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
        this.blockBooking()
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
  cancelReview(booking) {
    console.log(booking);
    this.dataService.present()
    this.dataService._post('bus-cities-custom/cancel', ``, {
      "itinKey": "FMNAB1IQRFDJH",
      "seats": [
        {
          "seatNo": "L2"
        }
      ]

    }).subscribe(d => {
      this.dataService.dismiss()
      booking.cancellationPolicy = d.orderItemsData.segments.ONEWAY.busData.cancellationText
      booking.cancellationId = d.cancellationId
      console.log(booking);

      // this.dataService.dismiss()
      // this.busReviewDetails = d
      // // this.busReviewDetails = d
      // this.itinKey = d.itinKey
      // alert(this.itinKey)

      // this.blockBooking()
    }, err => {
      this.dataService.dismiss()
    })
  }
  cancelConfirm(booking) {
    this.dataService.present()
    console.log(booking);


    this.dataService._post('bus-cities-custom/cancelConfirm', ``, {
      "itinKey": booking.data.refId,
      "cancellationId": booking.cancellationId

    }).subscribe(d => {
      this.dataService.dismiss()
      if (d.status) {
        this.dataService.presentToast('Cancellation Request Send!')
        this.navCtrl.back()
        this.getAllBookings()
      }
      else
        this.dataService.presentToast('Something Went Wrong. Please contact us. ')
      // booking.cancellationPolicy = d.orderItemsData.segments.ONEWAY.busData.cancellationText
      // booking.cancellationId = d.cancellationId
      // console.log(booking);
      // this.dataService.dismiss()
    }, err => {
      this.dataService.presentToast('Something Went Wrong. Please contact us.. ')
      this.dataService.dismiss()
    })
  }
  getBuses(pageContent) {
    this.dataService.present("Getting buses.", undefined)
    console.log('1..', this.inputs.date);
    console.log(new Date(this.inputs.date).toISOString().slice(0, 10));

    this.dataService._get('bus-cities-custom/searchBus', `from=${this.inputs.fromCityId}&to=${this.inputs.toCityId}&date=${new Date(this.inputs.date).toISOString().slice(0, 10)}&adt=${this.inputs.passenger}`).subscribe(d => {
      this.dataService.dismiss()
      this.buses = []
      if (!d.journeys.ONEWAY) return this.dataService.presentToast("No Bus Found")
      this.buses = d.journeys.ONEWAY
      this.filterBus()
      setTimeout(() => {

        if (this.buses.length)
          pageContent.scrollToPoint(0, 300, 200);

      }, 200);
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

  filterBus() {
    console.log(this.buses);
    if (this.filters.sort == 'low')
      this.buses.sort((busA, busB) => {
        // Replace 'capacity' with the property you want to sort by
        return +busB.fares[0].paxFares.adt.total.amount - (+busA.fares[0].paxFares.adt.total.amount); // Sorting by capacity in ascending order
      });

    else {
      this.buses.sort((busA, busB) => {
        // Replace 'capacity' with the property you want to sort by
        return +busA.fares[0].paxFares.adt.total.amount - (+busB.fares[0].paxFares.adt.total.amount); // Sorting by capacity in ascending order
      });
    }
    if (!this.filters.name) {
      this.filteredBuses = this.buses
      return
    }

    this.filteredBuses = this.buses.filter(bus => {
      // Your condition here, for example:
      return bus.buses[0].operatorName.toLowerCase().includes(this.filters.name.toLowerCase()) // Filtering buses with capacity greater than or equal to 50
    });
  }

  busSelected(bus) {

    this.selectedBusDetails = bus.buses[0]
    this.departureTime = this.convertTo12HourFormat(this.selectedBusDetails.depDetail.time)
    this.arrivalTime = this.convertTo12HourFormat(this.selectedBusDetails.arrDetail.time)
    console.log(this.selectedBusDetails);


    //add objects in passengers
    this.passengers = []
    let numberOfPassengers = +this.inputs.passenger
    while (numberOfPassengers--) {
      this.passengers.push({
        title: 'Mr',
        name: "",
        age: ""
      })
    }

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
      this.seatMap = d
      // d.deckData[0].seats.forEach(seat => {

      //   if (this.tempSingleSeat) return
      //   // if (passengers--)
      //   if (!seat.booked) {
      //     seatObject.push(seat.seatNo)
      //     this.tempSingleSeat = seat.seatNo
      //     this.charges.total += seat.fareDetails.paxFares.adt.total.amount
      //   }

      // });
      // alert(tempSingleSeat)


      this.router.navigate(['select-bus-seat'])



    }, err => {
      this.dataService.dismiss()
    })
  }
  getBusReview(key = this.key, seatNos = this.seatsSelected, pickId = this.selectedPick, dropId = this.selectedDrop) {
    this.dataService.present()
    console.log(key, seatNos, pickId, dropId);

    // this.dataService.present()


    // this.dataService._get('bus-cities-custom/busReview', `key=${key}&seatNo=${seatNos[0]}&pickId=${pickId}&dropId=${dropId}`).subscribe(d => {
    this.dataService._post('bus-cities-custom/busReview', ``, {
      key,
      seats: seatNos,
      pickId,
      dropId
    }).subscribe(d => {
      this.dataService.dismiss()
      this.busReviewDetails = d
      // this.busReviewDetails = d
      this.itinKey = d.itinKey
      // alert(this.itinKey)

      // this.blockBooking()
    }, err => {
      this.dataService.dismiss()
    })
  };
  blockBooking() {
    let travellers = []
    let seatIndex = 0
    this.passengers.forEach(passenger => {
      travellers.push({

        title: passenger.title,
        name: passenger.name,
        age: passenger.age,
        seat: {
          seatNo: this.seatsSelected[seatIndex],
        },

      })
      seatIndex++

    });
    this.dataService.present()
    this.dataService._post('bus-cities-custom/blockSeats', ``, {
      "itinKey": this.itinKey,
      "seatNo": this.tempSingleSeat,
      "pickId": this.selectedPick,
      "pickName": this.getStopName('pick', this.selectedPick),
      "dropId": this.selectedDrop,
      "dropName": this.getStopName('drop', this.selectedPick),
      mobile: this.dataService.profile.phone,
      "travellers": travellers
      // "travellers": [
      //   {
      //     title: "Mr",
      //     name: this.passengers[0].name,
      //     age: "22",
      //     seat: {
      //       seatNo: this.seatsSelected[0],
      //     },
      //   },
      // ]
    }).subscribe(d => {
      this.dataService.dismiss()
      // this.busReviewDetails = d
      // this.itinKey=d.itinKey
      // alert(this.itinKey)
      console.log('block request', d);
      try {
        if (d.blockRes.ONEWAY.status == 'success') {
          this.bookTicket()
        } else {
          this.dataService.presentToast("Something went wrong! Please contact us for booking !")
        }
      } catch (error) {
        this.dataService.presentToast("Something went wrong. Please contact us for booking !")
      }

      // this.bookTicket()

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
        // this.navCtrl.back()
        this.router.navigate(['/bus-dashboard'])
      })


    }, err => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something went wrong. Please contact us for booking !")
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

      if (!passenger.name || !passenger.age)
        validPassengerDetails = false

    });
    if (!validPassengerDetails)
      return this.dataService.presentToast("Fill Passenger Details Properly")
    this.payment()

    // this.getBusReview(this.key, this.tempSingleSeat, this.selectedPick, this.selectedDrop)

  }
  getAllBookings() {
    this.bookings = []
    this.dataService._get('bus-bookings', 'sort=id:desc&filters[user][id]=' + this.dataService.profile.id).subscribe(d => {
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
  searchCity(citySearchQuery, source) {

    console.log(citySearchQuery);


    if (!citySearchQuery) return
    if (citySearchQuery.length < 2) return

    this.dataService._get('bus-cities', 'filters[name][$contains]=' + citySearchQuery + '&pagination[pageSize]=5').subscribe(d => {


      if (source == 'from')
        this.fromSuggestions = d.data
      else
        this.toSuggestions = d.data


      if (d.data.length == 1) {
        this.citySelected(d.data[0], source)
      }


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


  convertTo12HourFormat(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
      hours -= 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    return formattedTime;
  }

  citySelected(city, source) {
    this.fromSuggestions = []
    this.toSuggestions = []
    if (source == 'from') {
      this.inputs.from = city.attributes.name
      this.inputs.fromCityId = city.attributes.cityId
    }
    else {
      this.inputs.to = city.attributes.name
      this.inputs.toCityId = city.attributes.cityId
    }


  }
  verifyAge(index) {
    let value: any = this.passengers[index].age
    if (+value < 1 || value > 99) {
      this.dataService.presentToast("Please enter a valid age between 1-99", 'dark', 1000)
      this.passengers[index].age = ""

    }

  }
  resetCoupon() {
    this.coupon.coupon = ""
    this.coupon.couponDiscountedTotal = 0
    this.coupon.discountText = ""
  }
  applyCoupon() {
    let amountBeforeTax = this.busReviewDetails.fares.paxFares.adt.total.amount / this.meta.busTaxValueMultiplier

    this.dataService._get(`custom-coupons/search`, `coupon=${this.coupon.coupon}&user=${this.dataService.profile.id}&section=bus&amount=${amountBeforeTax}`).subscribe(data => {
      if (data.discount)
        this.coupon.couponDiscountedTotal = this.busReviewDetails.fares.paxFares.adt.total.amount - data.discount
      else {
        this.resetCoupon()
      }

    })
  }
}

