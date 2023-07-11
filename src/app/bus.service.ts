import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  pick=[]
  drop=[]
  buses = []
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
  constructor(public dataService: DataService,public navCtrl:NavController,public router:Router) { }
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

    this.pick=bus.buses[0].stops.pick
    this.drop=bus.buses[0].stops.drop
    console.log('picks',this.pick,this.drop);
    

    this.dataService.present()


    this.dataService._get('bus-cities-custom/getSeats/'+bus.key, '').subscribe(d => {
      this.dataService.dismiss()
      this.seatDetails = d

      let seatObject = []
      let tempSingleSeat
      // let passengers: number = +this.inputs.passenger
      // let passengers: number =1


      // this.seatDetails.deckData[0].seats.forEach(element => {
      d.deckData[0].seats.forEach(seat => {

        if(tempSingleSeat)return 
        // if (passengers--)
          if (!seat.booked) {
            seatObject.push(seat.seatNo)
            tempSingleSeat=seat.seatNo
          }

      });
      // alert(tempSingleSeat)

  this.router.navigate(['bus-booking-review'])



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
// }
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
