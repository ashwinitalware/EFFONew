import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  buses = [
    {
      "buses": [
        {
          "journeyTime": 180,
          "availableSeats": 36,
          "depDetail": {
            "time": "2023-07-12 07:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 10:30:00.000"
          },
          "operatorName": "Hari om travels agency",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 53581176,
          "busType": "Non AC Seater (2+2)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 1231752,
                "name": "Power house,near hotel white castal, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:30 AM"
              },
              {
                "id": 1067071,
                "name": "Hari om travels agency opp pdmc hospital, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:30 AM"
              }
            ],
            "drop": [
              {
                "id": 1510484,
                "name": "Ravi Nagar",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:30 AM"
              },
              {
                "id": 1510483,
                "name": "Dharampeth",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:35 AM"
              },
              {
                "id": 1510485,
                "name": "Loha pool mata ji mandir.",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:40 AM"
              },
              {
                "id": 1528123,
                "name": "Jaripatka",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:50 AM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SEATER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@d449ea47-d512-437c-99cd-c575373aaf70_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 2672.75
              },
              "base": {
                "amount": 267.75
              },
              "tax": {
                "amount": 12.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 180,
          "availableSeats": 36,
          "depDetail": {
            "time": "2023-07-12 17:00:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 20:00:00.000"
          },
          "operatorName": "Hari om travels agency",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 51431095,
          "busType": "Non AC Seater (2+2)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 1067071,
                "name": "Hari om travels agency opp pdmc hospital, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:00 PM"
              }
            ],
            "drop": [
              {
                "id": 1510484,
                "name": "Ravi Nagar",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "08:00 PM"
              },
              {
                "id": 1510483,
                "name": "Dharampeth",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "08:05 PM"
              },
              {
                "id": 1510485,
                "name": "Loha pool mata ji mandir.",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "08:10 PM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SEATER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@befa98fa-5ef9-4d6b-ab21-f78c54a90b1f_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 267.75
              },
              "base": {
                "amount": 267.75
              },
              "tax": {
                "amount": 12.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 139,
          "availableSeats": 36,
          "depDetail": {
            "time": "2023-07-12 09:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 11:49:00.000"
          },
          "operatorName": "Hari om travels agency",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 52260501,
          "busType": "Non AC Seater (2+2)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 1231752,
                "name": "Power house,near hotel white castal, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "09:30 AM"
              },
              {
                "id": 1067071,
                "name": "Hari om travels agency opp pdmc hospital, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "09:30 AM"
              }
            ],
            "drop": [
              {
                "id": 1510483,
                "name": "Dharampeth",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:49 AM"
              },
              {
                "id": 1510484,
                "name": "Ravi Nagar",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:49 AM"
              },
              {
                "id": 1510485,
                "name": "Loha pool mata ji mandir.",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:49 AM"
              },
              {
                "id": 1746204,
                "name": "Bus stand",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:49 AM"
              },
              {
                "id": 1746205,
                "name": "Sita buldi",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:49 AM"
              },
              {
                "id": 18269002,
                "name": "Nagpur",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:49 AM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SEATER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@1efd45c5-c392-4f40-8ec8-5ef79a193c2b_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 267.75
              },
              "base": {
                "amount": 267.75
              },
              "tax": {
                "amount": 12.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 139,
          "availableSeats": 36,
          "depDetail": {
            "time": "2023-07-12 15:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 17:49:00.000"
          },
          "operatorName": "Hari om travels agency",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 52260500,
          "busType": "Non AC Seater (2+2)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 1231752,
                "name": "Power house,near hotel white castal, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "03:30 PM"
              },
              {
                "id": 1067071,
                "name": "Hari om travels agency opp pdmc hospital, rahatgaon road, amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "03:30 PM"
              }
            ],
            "drop": [
              {
                "id": 1510483,
                "name": "Dharampeth",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:49 PM"
              },
              {
                "id": 1510484,
                "name": "Ravi Nagar",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:49 PM"
              },
              {
                "id": 1510485,
                "name": "Loha pool mata ji mandir.",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:49 PM"
              },
              {
                "id": 1746204,
                "name": "Bus stand",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:49 PM"
              },
              {
                "id": 1746205,
                "name": "Sita buldi",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:49 PM"
              },
              {
                "id": 18269002,
                "name": "Nagpur",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:49 PM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SEATER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@001471e9-444c-40d9-8565-13f00b8b97b7_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 267.75
              },
              "base": {
                "amount": 267.75
              },
              "tax": {
                "amount": 12.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 160,
          "availableSeats": 19,
          "depDetail": {
            "time": "2023-07-12 03:40:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 06:20:00.000"
          },
          "operatorName": "Shree Khurana Shabrij Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 50510706,
          "busType": "Bharat Benz A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 18023723,
                "name": "Near Hotel Jalsa, Power House",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "03:40 AM"
              }
            ],
            "drop": [
              {
                "id": 18023526,
                "name": "Wadi Office",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:20 AM"
              },
              {
                "id": 18023515,
                "name": "Dharampeth-Near Bhole Petrol Pump:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:30 AM"
              },
              {
                "id": 23317078,
                "name": "SB KHURANA OFF.DALDA FACTORY ROAD:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:40 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@ee5680b3-3836-4fb2-9745-908e8a1c60dd_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 399
              },
              "base": {
                "amount": 399
              },
              "tax": {
                "amount": 19
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 348.6
              },
              "base": {
                "amount": 348.6
              },
              "tax": {
                "amount": 16.6
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 698.25
              },
              "base": {
                "amount": 698.25
              },
              "tax": {
                "amount": 33.25
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 210,
          "availableSeats": 29,
          "depDetail": {
            "time": "2023-07-12 19:00:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 22:30:00.000"
          },
          "operatorName": "Jagirdar Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 59651232,
          "busType": "AC Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 23662555,
                "name": "Royal travels power house welcome point",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:00 PM"
              }
            ],
            "drop": [
              {
                "id": 23662559,
                "name": "Ganeshpeth",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:30 PM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@12e01726-44fb-4bb0-98fc-6076c18687f4_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 420
              },
              "base": {
                "amount": 420
              },
              "tax": {
                "amount": 20
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 180,
          "availableSeats": 30,
          "depDetail": {
            "time": "2023-07-12 19:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 22:30:00.000"
          },
          "operatorName": "Payal Travels Durg",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 55596325,
          "busType": "Bharat Benz A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 22649875,
                "name": "Royal travels ",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:30 PM"
              }
            ],
            "drop": [
              {
                "id": 1716195,
                "name": "Loha pool mata ji mandir.",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:30 PM"
              },
              {
                "id": 22221603,
                "name": "Gitanjali talkies",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "10:30 PM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@5ad2e8d1-60f5-4135-9b33-84607abce794_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 525
              },
              "base": {
                "amount": 525
              },
              "tax": {
                "amount": 25
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 115,
          "availableSeats": 16,
          "depDetail": {
            "time": "2023-07-12 04:35:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 06:30:00.000"
          },
          "operatorName": "Khurana Travel Services",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 52272969,
          "busType": "Bharat Benz A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 23341472,
                "name": "Near Hotel White Castle Power House Amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "04:35 AM"
              }
            ],
            "drop": [
              {
                "id": 18024987,
                "name": "Near Agrawal Gas Agency OPPOSIT ORDNANCE FACTORYGATE NO.1 Dattawadi:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:15 AM"
              },
              {
                "id": 21456563,
                "name": "Ravinagar,Nagpur:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:17 AM"
              },
              {
                "id": 18024983,
                "name": "Rajat Sankul,Near Ganeshpeth Bus stand,Front of Rai Udyog LTD",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:30 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@2b6342ba-50c9-4ed3-bbe4-72b6a52925be_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 645.75
              },
              "base": {
                "amount": 645.75
              },
              "tax": {
                "amount": 30.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 598.5
              },
              "base": {
                "amount": 598.5
              },
              "tax": {
                "amount": 28.5
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 745.5
              },
              "base": {
                "amount": 745.5
              },
              "tax": {
                "amount": 35.5
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 160,
          "availableSeats": 31,
          "depDetail": {
            "time": "2023-07-12 02:35:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 05:15:00.000"
          },
          "operatorName": "Shree Khurana Shabrij Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 50039283,
          "busType": "Bharat Benz A/C Seater (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 18023723,
                "name": "Near Hotel Jalsa, Power House",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "02:35 AM"
              }
            ],
            "drop": [
              {
                "id": 18023526,
                "name": "Wadi Office",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:15 AM"
              },
              {
                "id": 18023515,
                "name": "Dharampeth-Near Bhole Petrol Pump:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:25 AM"
              },
              {
                "id": 23317078,
                "name": "SB KHURANA OFF.DALDA FACTORY ROAD:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:35 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SEATER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@dafa51e2-10f1-4b2e-a06c-312a8185b7d8_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 630
              },
              "base": {
                "amount": 630
              },
              "tax": {
                "amount": 30
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 160,
          "availableSeats": 30,
          "depDetail": {
            "time": "2023-07-12 03:50:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 06:30:00.000"
          },
          "operatorName": "Shree Khurana Shabrij Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 50040924,
          "busType": "A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 18023723,
                "name": "Near Hotel Jalsa, Power House",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "03:50 AM"
              }
            ],
            "drop": [
              {
                "id": 18023526,
                "name": "Wadi Office",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:30 AM"
              },
              {
                "id": 18023515,
                "name": "Dharampeth-Near Bhole Petrol Pump:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:40 AM"
              },
              {
                "id": 23317078,
                "name": "SB KHURANA OFF.DALDA FACTORY ROAD:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:50 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@74736e2a-baf3-43cc-a824-69ea64ea372d_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 698.25
              },
              "base": {
                "amount": 698.25
              },
              "tax": {
                "amount": 33.25
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 645.75
              },
              "base": {
                "amount": 645.75
              },
              "tax": {
                "amount": 30.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 745.5
              },
              "base": {
                "amount": 745.5
              },
              "tax": {
                "amount": 35.5
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 240,
          "availableSeats": 10,
          "depDetail": {
            "time": "2023-07-12 02:45:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 06:45:00.000"
          },
          "operatorName": "Shree Khurana Shabrij Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 51905481,
          "busType": "NON A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 18023723,
                "name": "Near Hotel Jalsa, Power House",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "02:45 AM"
              }
            ],
            "drop": [
              {
                "id": 23317058,
                "name": "SB KHURANA OFF,WADI T-POINT :",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:15 AM"
              },
              {
                "id": 18707338,
                "name": "Ravinagar Agrasen Chatrwal:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:25 AM"
              },
              {
                "id": 23567971,
                "name": "Dharampeth-Near Sairaj Travels :",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:45 AM"
              },
              {
                "id": 23317078,
                "name": "SB KHURANA OFF.DALDA FACTORY ROAD:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:45 AM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@62f20150-90a5-40a7-85c0-e33e3320be79_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 698.25
              },
              "base": {
                "amount": 698.25
              },
              "tax": {
                "amount": 33.25
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 645.75
              },
              "base": {
                "amount": 645.75
              },
              "tax": {
                "amount": 30.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 180,
          "availableSeats": 20,
          "depDetail": {
            "time": "2023-07-12 04:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 07:30:00.000"
          },
          "operatorName": "Shree Khurana Shabrij Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 57852054,
          "busType": "NON A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 18023723,
                "name": "Near Hotel Jalsa, Power House",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "04:30 AM"
              }
            ],
            "drop": [
              {
                "id": 18023526,
                "name": "Wadi Office",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:15 AM"
              },
              {
                "id": 18707338,
                "name": "Ravinagar Agrasen Chatrwal:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:20 AM"
              },
              {
                "id": 18023515,
                "name": "Dharampeth-Near Bhole Petrol Pump:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:30 AM"
              },
              {
                "id": 23317078,
                "name": "SB KHURANA OFF.DALDA FACTORY ROAD:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:45 AM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@c6ddbf3c-2c4f-40d2-90de-a9434b368333_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 698.25
              },
              "base": {
                "amount": 698.25
              },
              "tax": {
                "amount": 33.25
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 645.75
              },
              "base": {
                "amount": 645.75
              },
              "tax": {
                "amount": 30.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 745.5
              },
              "base": {
                "amount": 745.5
              },
              "tax": {
                "amount": 35.5
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 120,
          "availableSeats": 17,
          "depDetail": {
            "time": "2023-07-12 03:00:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 05:00:00.000"
          },
          "operatorName": "Khurana Travel Services",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 58248221,
          "busType": "A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 23341472,
                "name": "Near Hotel White Castle Power House Amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "03:00 AM"
              }
            ],
            "drop": [
              {
                "id": 22155600,
                "name": "Near Ammaji ki Dargha Kondhali:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "04:30 AM"
              },
              {
                "id": 18024987,
                "name": "Near Agrawal Gas Agency OPPOSIT ORDNANCE FACTORYGATE NO.1 Dattawadi:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:00 AM"
              },
              {
                "id": 21456563,
                "name": "Ravinagar,Nagpur:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:10 AM"
              },
              {
                "id": 18024972,
                "name": "Dharampeth- Mahda Complex:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:20 AM"
              },
              {
                "id": 18024983,
                "name": "Rajat Sankul,Near Ganeshpeth Bus stand,Front of Rai Udyog LTD",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:30 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@a5b50a8b-9242-47e4-a9aa-413dbfbdbf2d_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 698.25
              },
              "base": {
                "amount": 698.25
              },
              "tax": {
                "amount": 33.25
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 645.75
              },
              "base": {
                "amount": 645.75
              },
              "tax": {
                "amount": 30.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 151,
          "availableSeats": 21,
          "depDetail": {
            "time": "2023-07-12 05:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 08:01:00.000"
          },
          "operatorName": "Chouhan Travels (I) Pvt Ltd",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 58340343,
          "busType": "NON A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 17715178,
                "name": "Amravati Panchvati Square",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:30 AM"
              }
            ],
            "drop": [
              {
                "id": 17715165,
                "name": "Wadi ",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:31 AM"
              },
              {
                "id": 17715168,
                "name": "Ravi Nagar Opp Agrasen Chhatravas ",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:41 AM"
              },
              {
                "id": 17715170,
                "name": "Dharampeth ",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:51 AM"
              },
              {
                "id": 18026018,
                "name": "Sita Wadi Sqaure Near Police Station ",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "08:01 AM"
              }
            ]
          },
          "busTypeFilters": [
            "NONAC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@79f14540-4615-45bb-8656-7966f7d31932_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 840
              },
              "base": {
                "amount": 840
              },
              "tax": {
                "amount": 40
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 200,
          "availableSeats": 34,
          "depDetail": {
            "time": "2023-07-12 01:30:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 04:50:00.000"
          },
          "operatorName": "GM Bus Tours And Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 50076362,
          "busType": "AC Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 23925747,
                "name": "Diamond travels power house near welcome point",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "01:30 AM"
              }
            ],
            "drop": [
              {
                "id": 23899596,
                "name": "Wadi",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "04:50 AM"
              },
              {
                "id": 23899597,
                "name": "Ravi Nagar",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:00 AM"
              },
              {
                "id": 23899598,
                "name": "Dharampeth bhole petrol pump",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:05 AM"
              },
              {
                "id": 23682757,
                "name": "Bus stand",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:15 AM"
              },
              {
                "id": 23687754,
                "name": "Gm bus office bus stand",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:16 AM"
              },
              {
                "id": 23925780,
                "name": "Ashirwad baidhnath chowk",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:20 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@efc9ec3e-bd44-41b4-8a30-58a24d694643_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 892.5
              },
              "base": {
                "amount": 892.5
              },
              "tax": {
                "amount": 42.5
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 180,
          "availableSeats": 9,
          "depDetail": {
            "time": "2023-07-12 03:00:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 06:00:00.000"
          },
          "operatorName": "Khurana Travel Services",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 59654526,
          "busType": "A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 23341472,
                "name": "Near Hotel White Castle Power House Amravati",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "03:00 AM"
              }
            ],
            "drop": [
              {
                "id": 18024987,
                "name": "Near Agrawal Gas Agency OPPOSIT ORDNANCE FACTORYGATE NO.1 Dattawadi:",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "05:30 AM"
              },
              {
                "id": 23712880,
                "name": "Dharampeth- Mahda Complex VIA- SAMRUDHI :",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:00 AM"
              },
              {
                "id": 23712879,
                "name": "Rajat Sankul,Near Ganeshpeth Bus stand,Front of Rai Udyog LTD - VIA-SAMRUDHI",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "06:30 AM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@54b23c01-8f28-433c-b087-aafee69a789b_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 999.6
              },
              "base": {
                "amount": 999.6
              },
              "tax": {
                "amount": 47.6
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        },
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 897.75
              },
              "base": {
                "amount": 897.75
              },
              "tax": {
                "amount": 42.75
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    },
    {
      "buses": [
        {
          "journeyTime": 240,
          "availableSeats": 28,
          "depDetail": {
            "time": "2023-07-12 19:15:00.000"
          },
          "arrDetail": {
            "time": "2023-07-12 23:15:00.000"
          },
          "operatorName": "Mahendra     Travels",
          "operatorServiceName": "",
          "supplierName": "Seat Seller",
          "busId": 55118660,
          "busType": "Volvo A/C Sleeper (2+1)",
          "refundable": true,
          "nextDayArr": false,
          "stops": {
            "pick": [
              {
                "id": 1093395,
                "name": "Hardik travels agency opp p.d.m.c",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "07:15 PM"
              }
            ],
            "drop": [
              {
                "id": 1093421,
                "name": "Gitanjali talkies",
                "contact": " ",
                "landmark": " ",
                "address": " ",
                "time": "11:15 PM"
              }
            ]
          },
          "busTypeFilters": [
            "AC",
            "SLEEPER"
          ],
          "starRating": "0",
          "isGovernmentSupplier": false,
          "priority": 0
        }
      ],
      "key": "bd24889a-d359-4f24-beec-a88ea52e77e6@@8ad3c5af-611a-4c8c-87f3-722a11d6764d_ONEWAY",
      "fares": [
        {
          "paxFares": {
            "adt": {
              "total": {
                "amount": 945
              },
              "base": {
                "amount": 945
              },
              "tax": {
                "amount": 45
              },
              "GST": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        }
      ]
    }
  ]
  seatDetails = {
    "deckData": [
      {
        "busConfig": {
          "x": 9,
          "y": 5
        },
        "seats": [
          {
            "seatNo": "35",
            "seatPos": {
              "x": 0,
              "y": 8
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "34",
            "seatPos": {
              "x": 1,
              "y": 8
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "33",
            "seatPos": {
              "x": 2,
              "y": 8
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "32",
            "seatPos": {
              "x": 3,
              "y": 8
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "31",
            "seatPos": {
              "x": 4,
              "y": 8
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "27",
            "seatPos": {
              "x": 0,
              "y": 7
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "28",
            "seatPos": {
              "x": 1,
              "y": 7
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "29",
            "seatPos": {
              "x": 3,
              "y": 7
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "30",
            "seatPos": {
              "x": 4,
              "y": 7
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "26",
            "seatPos": {
              "x": 0,
              "y": 6
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "25",
            "seatPos": {
              "x": 1,
              "y": 6
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "24",
            "seatPos": {
              "x": 3,
              "y": 6
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "23",
            "seatPos": {
              "x": 4,
              "y": 6
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "19",
            "seatPos": {
              "x": 0,
              "y": 5
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "20",
            "seatPos": {
              "x": 1,
              "y": 5
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "21",
            "seatPos": {
              "x": 3,
              "y": 5
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "22",
            "seatPos": {
              "x": 4,
              "y": 5
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "18",
            "seatPos": {
              "x": 0,
              "y": 4
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "17",
            "seatPos": {
              "x": 1,
              "y": 4
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "16",
            "seatPos": {
              "x": 3,
              "y": 4
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "15",
            "seatPos": {
              "x": 4,
              "y": 4
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "11",
            "seatPos": {
              "x": 0,
              "y": 3
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "12",
            "seatPos": {
              "x": 1,
              "y": 3
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "14",
            "seatPos": {
              "x": 3,
              "y": 3
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "13",
            "seatPos": {
              "x": 4,
              "y": 3
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "10",
            "seatPos": {
              "x": 0,
              "y": 2
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "9",
            "seatPos": {
              "x": 1,
              "y": 2
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "8",
            "seatPos": {
              "x": 3,
              "y": 2
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "7",
            "seatPos": {
              "x": 4,
              "y": 2
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "3",
            "seatPos": {
              "x": 0,
              "y": 1
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "4",
            "seatPos": {
              "x": 1,
              "y": 1
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "5",
            "seatPos": {
              "x": 3,
              "y": 1
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "6",
            "seatPos": {
              "x": 4,
              "y": 1
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "2",
            "seatPos": {
              "x": 0,
              "y": 0
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "1",
            "seatPos": {
              "x": 1,
              "y": 0
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
                  }
                }
              }
            },
            "isVertical": false
          },
          {
            "seatNo": "36",
            "seatPos": {
              "x": 4,
              "y": 0
            },
            "booked": false,
            "seatType": "SEATER",
            "fareDetails": {
              "paxFares": {
                "adt": {
                  "total": {
                    "amount": 267.75
                  },
                  "base": {
                    "amount": 267.75
                  },
                  "tax": {
                    "amount": 0
                  },
                  "GST": {
                    "amount": 12.75
                  },
                  "comm": {
                    "amount": 0
                  },
                  "disc": {
                    "amount": 0
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
          "id": 1067071,
          "name": "Hari om travels agency opp pdmc hospital, rahatgaon road, amravati",
          "contact": " ",
          "landmark": " ",
          "address": " ",
          "time": "05:00 PM"
        }
      ],
      "drop": [
        {
          "id": 1510484,
          "name": "Ravi Nagar",
          "contact": " ",
          "landmark": " ",
          "address": " ",
          "time": "08:00 PM"
        },
        {
          "id": 1510483,
          "name": "Dharampeth",
          "contact": " ",
          "landmark": " ",
          "address": " ",
          "time": "08:05 PM"
        },
        {
          "id": 1510485,
          "name": "Loha pool mata ji mandir.",
          "contact": " ",
          "landmark": " ",
          "address": " ",
          "time": "08:10 PM"
        }
      ]
    },
    "dropPointRequired": true
  }
  busReviewDetails = {
    "itinKey": "FMNJB1IQM14AH",
    "reviewKey": "2cbb930b-aef3-4f14-99ec-55ceb7cb2ec0",
    "busDetails": {
      "ONEWAY": {
        "buses": [
          {
            "journeyTime": 180,
            "availableSeats": 36,
            "depDetail": {
              "time": "2023-07-12 17:00:00.000"
            },
            "arrDetail": {
              "time": "2023-07-12 20:00:00.000"
            },
            "operatorName": "Hari om travels agency",
            "operatorServiceName": "",
            "supplierName": "Seat Seller",
            "busId": 51431095,
            "busType": "Non AC Seater (2+2)",
            "refundable": true,
            "nextDayArr": false,
            "stops": {
              "pick": [
                {
                  "id": 1067071,
                  "name": "Hari om travels agency opp pdmc hospital, rahatgaon road, amravati",
                  "contact": " ",
                  "landmark": " ",
                  "address": " ",
                  "time": "05:00 PM"
                }
              ],
              "drop": [
                {
                  "id": 1510484,
                  "name": "Ravi Nagar",
                  "contact": " ",
                  "landmark": " ",
                  "address": " ",
                  "time": "08:00 PM"
                },
                {
                  "id": 1510483,
                  "name": "Dharampeth",
                  "contact": " ",
                  "landmark": " ",
                  "address": " ",
                  "time": "08:05 PM"
                },
                {
                  "id": 1510485,
                  "name": "Loha pool mata ji mandir.",
                  "contact": " ",
                  "landmark": " ",
                  "address": " ",
                  "time": "08:10 PM"
                }
              ]
            },
            "busTypeFilters": [
              "NONAC",
              "SEATER"
            ],
            "starRating": "0",
            "isGovernmentSupplier": false,
            "priority": 0
          }
        ],
        "key": "9f347203-4cf2-4d9b-8fb4-f39b6a608475@@63157f04-eb0e-47ea-a2fc-68d987152aba_ONEWAY",
        "fares": [
          {
            "totalFare": {
              "total": {
                "amount": 267.75
              },
              "base": {
                "amount": 267.75
              },
              "tax": {
                "amount": 0
              },
              "comm": {
                "amount": 0
              },
              "disc": {
                "amount": 0
              }
            }
          }
        ]
      }
    },
    "fares": {
      "paxFares": {
        "adt": {
          "total": {
            "amount": 267.75
          },
          "base": {
            "amount": 267.75
          },
          "tax": {
            "amount": 0
          },
          "comm": {
            "amount": 0
          },
          "disc": {
            "amount": 0
          }
        }
      }
    },
    "searchQuery": {
      "segments": {
        "ONEWAY": {
          "sectorInfo": {
            "src": {
              "id": 4135,
              "city": "Amravati"
            },
            "dest": {
              "id": 4327,
              "city": "Nagpur"
            },
            "date": "2023-07-12"
          },
          "supplierIds": [
            9825800,
            1445400,
            5673135,
            4543385,
            2704570,
            2523449,
            1445467,
            380369,
            5737947,
            4543358,
            5737947,
            2222222,
            5475108
          ]
        }
      },
      "paxCount": {
        "adt": 1,
        "chd": 0
      },
      "api": "JOURNEY",
      "senior": false
    },
    "photoId": true,
    "reviewJourneys": {
      "ONEWAY": {
        "seats": [
          {
            "seatNo": "35"
          }
        ],
        "busStops": {
          "pick": {
            "id": 1067071
          },
          "drop": {
            "id": 1510484
          }
        }
      }
    },
    "titles": {
      "adt": [
        "Mr",
        "Mrs",
        "Miss"
      ]
    },
    "idTypes": [
      "AADHAR",
      "DL",
      "PASSPORT",
      "PAN",
      "VOTER_ID",
      "RATION"
    ],
    "services": {
      "INSURANCE": {
        "plans": [
          {
            "company": "icici",
            "name": "ICICI Lombard",
            "code": "2",
            "url": {
              "tnc": "http://images.via.com/static/img/viacom/Via_Domestic_Policy_Information_bus.pdf",
              "claimForm": "http://images.via.com/static/img/viacom/Via_Domestic_Claim_Form_Claim_Process.pdf",
              "coverage": "http://images.via.com/static/img/viacom/Via_Domestic_Eligibility_Coverage_bus.pdf",
              "faq": "http://images.via.com/static/img/viacom/Via_Domestic_FAQs1.pdf"
            },
            "amountPerPax": 10
          }
        ]
      }
    },
    "oTerms": [
      ""
    ],
    "maxRedeemablePoints": 0,
    "isVoucherOnBusEnabled": true
  }
  fromSuggestions = []

  toSuggestions = []
  history = []
  inputs = {
    from: "",
    fromCityId: "",
    to: "",
    toCityId: "",
    date: "",
    passenger: ""
  }
  constructor(public dataService: DataService) { }
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
  getSeats(key) {
    this.dataService.present()


    this.dataService._get('bus-cities-custom/getSeats/key', '').subscribe(d => {
      this.seatDetails = d

      let seatObject = []
      let passengers: number = +this.inputs.passenger


      // this.seatDetails.deckData[0].seats.forEach(element => {
      d.deckData[0].seats.forEach(seat => {

        if (passengers--)
          if (!seat.booked) {
            seatObject.push(seat.seatNo)

          }

      });

      // while(passengers--){




      // }




    }, err => {
      this.dataService.dismiss()
    })
  }
  getBusReview(key, seatObject, pickId, dropId) {
    console.log(key, seatObject, pickId, dropId);

    // this.dataService.present()


    // this.dataService._get('bus-cities-custom/busReview', `key=${key}&seatNo=${seatNo}&pickId=${pickId}&dropId=${dropId}`).subscribe(d => {
    //   this.busReviewDetails = d


    // }, err => {
    //   this.dataService.dismiss()
    // })
  };

  // this.dataService.present()


  // this.dataService._get('bus-cities-custom/busReview', `key=${key}&seatNo=${seatNo}&pickId=${pickId}&dropId=${dropId}`).subscribe(d => {
  //   this.busReviewDetails = d


  // }, err => {
  //   this.dataService.dismiss()
  // })
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
}
