import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
declare const google;
import qs from 'qs';
import { CabService } from 'src/app/services/cab.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage {
  @ViewChild('map') mapRef: ElementRef;
  time = undefined;
  canCancel = true;
  map: any;
  directionsRenderer;
  directionsService;
  cabMarker;

  data;

  ride;
  driver;
  filteredCabsImgs = [];

  constructor(
    public cabService: CabService,
    public dataService: DataService,
    public http: HttpClient, // public fcm: FCM
    public activatedRoute: ActivatedRoute
  ) { }

  showMap() {
    // set map center location
    const location = new google.maps.LatLng(
      this.ride.attributes.fromLat,
      this.ride.attributes.fromLng
    );
    const options = {
      center: location,
      zoom: 14,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
    };
    this.directionsService = new google.maps.DirectionsService();
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkers();
  }
  addMarkers() {
    const fromPinMarker = new google.maps.Marker({
      position: new google.maps.LatLng(
        this.ride.attributes.fromLat,
        this.ride.attributes.fromLng
      ),
      map: this.map,
      icon: {
        url: 'assets/cab/fromPin.png',
      },
    });
    const toPinMarker = new google.maps.Marker({
      position: new google.maps.LatLng(
        this.ride.attributes.toLat,
        this.ride.attributes.toLng
      ),
      map: this.map,
      icon: {
        url: 'assets/cab/toPin.png',
      },
    });
    // alert('123')
    this.cabMarker = new google.maps.Marker({
      position: new google.maps.LatLng(
        this.driver.attributes.driverLat,
        this.driver.attributes.driverLng
      ),
      map: this.map,
      icon: {
        url: 'assets/cab/mini.png',
      },
    });
    this.addDirection();
  }

  addDirection(firstTime = true) {
    const polylineDotted = {
      strokeColor: '#0208bf',
    };
    const rendererOptions = {
      map: this.map,
      suppressMarkers: true,
      polylineOptions: polylineDotted,
    };
    this.directionsRenderer = new google.maps.DirectionsRenderer(
      rendererOptions
    );

    this.directionsRenderer.setMap(this.map);

    this.directionsService.route(
      {
        origin: new google.maps.LatLng(
          this.driver.attributes.driverLat,
          this.driver.attributes.driverLng
        ),
        waypoints: [
          {
            location: new google.maps.LatLng(
              this.ride.attributes.fromLat,
              this.ride.attributes.fromLng
            ),
            stopover: true,
          },
        ],
        destination: new google.maps.LatLng(
          this.ride.attributes.toLat,
          this.ride.attributes.toLng
        ),

        travelMode: 'DRIVING',
      },
      (response, status) => {
        console.log(response, status);

        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
          this.time = response.routes[0].legs[0].duration.text;

          if (firstTime) {
            try {
              clearInterval(this.cabService.driverInterval);
            } catch (error) { }
            this.cabService.driverInterval = setInterval(() => {
              this.getDriverLocation();
            }, 5000);
          }
        } else {
          console.log('Directions request failed due to ' + status);
        }
      }
    );
    setTimeout(() => {
      this.rotateCab();
    }, 1000);
  }

  ionViewDidEnter() {
    // FIRST GET THE RIDE DETAILS
    const query = qs.stringify({
      populate: '*',
    });
    // eslint-disable-next-line no-underscore-dangle
    this.dataService
      ._get('cab-rides/' + this.activatedRoute.snapshot.params.rideId, query)
      .subscribe((data) => {
        this.ride = data.data;
        // this.driver = data.data.attributes.driver.data;
        this.driver = data.data.attributes.driver.data;
        // SHOW THE MAP WITH CENTER AS USER START LOCATION
        this.showMap();
      });

    // ADD CAB MARKER
    // ADD DIRECTION

    // const fromPinMarker = new google.maps.Marker({
    //   position: new google.maps.LatLng(
    //     this.data.ctlDetails.from_latitude,
    //     this.data.ctlDetails.from_longitude
    //   ),
    //   map: this.map,
    //   icon: {
    //     url: 'assets/imgs/fromPin.png',
    //   },
    // });
    // const toPinMarker = new google.maps.Marker({
    //   position: new google.maps.LatLng(
    //     this.data.ctlDetails.to_latitude,
    //     this.data.ctlDetails.to_longitude
    //   ),
    //   map: this.map,
    //   icon: {
    //     url: 'assets/imgs/toPin.png',
    //   },
    // });
    // this.cabMarker = new google.maps.Marker({
    //   position: new google.maps.LatLng(
    //     this.data.driverDetails.current_latitude,
    //     this.data.driverDetails.current_longitude
    //   ),
    //   map: this.map,
    //   icon: {
    //     url: `assets/cab/mini.png`,
    //   },
    // });

    // const rendererOptions = {
    //   map: this.map,
    //   suppressMarkers: true,
    //   polylineOptions: polylineDotted,
    // };
    // this.directionsRenderer = new google.maps.DirectionsRenderer(
    //   rendererOptions
    // );

    // this.directionsRenderer.setMap(this.map);

    // this.directionsService.route(
    //   {
    //     origin: new google.maps.LatLng(
    //       this.data.driverDetails.current_latitude,
    //       this.data.driverDetails.current_longitude
    //     ),
    //     waypoints: [
    //       {
    //         location: new google.maps.LatLng(
    //           this.data.ctlDetails.from_latitude,
    //           this.data.ctlDetails.from_longitude
    //         ),
    //         stopover: true,
    //       },
    //     ],
    //     destination: new google.maps.LatLng(
    //       this.data.ctlDetails.to_latitude,
    //       this.data.ctlDetails.to_longitude
    //     ),

    //     travelMode: 'DRIVING',
    //   },
    //   (response, status) => {

    //     console.log(response, status);

    //     if (status === 'OK') {
    //       this.directionsRenderer.setDirections(response);
    //       this.time = response.routes[0].legs[0].duration.text;

    //     } else {
    //       console.log('Directions request failed due to ' + status);
    //     }
    //   }
    // );
  }

  getDriverLocation() {
    // eslint-disable-next-line no-underscore-dangle
    this.dataService._get('users/' + this.driver.id, '').subscribe((data) => {

      this.animatedMove(
        this.cabMarker,
        1,
        new google.maps.LatLng(
          this.driver.attributes.driverLat,
          this.driver.attributes.driverLng
        ),
        new google.maps.LatLng(data.driverLat, data.driverLng)
      );

      this.getHeading(
        this.driver.attributes.driverLat,
        this.driver.attributes.driverLng,
        data.driverLat,
        data.driverLng
      );
      this.driver.attributes = data;

    });
  }

  ionViewDidLoad() { }
  ionViewDidLeave() { }

  rotateCab() {
    console.log('cabmarker', this.cabMarker);
    // document.images[0].

    // const allImgs: any = document.getElementsByTagName('img');
    const allImgs: any = document.images;
    // const allImgs: any = document.querySelector('[src=assets/cab/mini.png]');
    // const allImgs: any = document.querySelector('[src=assets/cab/mini.png]');

    this.filteredCabsImgs = [];
    console.log('ALL IMAGES', allImgs);

    console.log('length', allImgs.length);
    for (let i = 0; i < allImgs.length; i++) {
      // console.log('123123');
      if (allImgs.item(i).src.includes('assets/cab/mini.png')) {
        console.log('including this cab ', i, allImgs.item(i));
        // THERE IS SOMETHING FISHY. FITLER CABS WILL BE GREATER THAT TOTAL CABS .CHECK LATER ON
        this.filteredCabsImgs.push(allImgs.item(i));
      }

      // allCabsImgs.item(i).setAttribute('abc','def')
    }

    console.log('filteredCabs ', this.filteredCabsImgs);

    // allCabsImgs.item(i).style.transition = "300ms ease all";
    // allCabsImgs.item(i).style.transform = "rotate(45deg)";
  }

  getHeading(lat1, lon1, lat2, lon2) {
    var lat1: any = (lat1 * Math.PI) / 180;
    var lat2: any = (lat2 * Math.PI) / 180;
    var dLon = ((lon2 - lon1) * Math.PI) / 180;

    var y = Math.sin(dLon) * Math.cos(lat2);
    var x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    var brng = Math.atan2(y, x);

    const degree = ((brng * 180) / Math.PI + 360) % 360;

    if (degree) {
      console.log('GOT DEGREE', degree);
      this.filteredCabsImgs.forEach((element) => {
        element.style.transition = '300ms ease all';
        element.style.transform = `rotate(${degree - 90}deg)`;
        // element.style.transform = `rotate(${
        //   Math.floor(Math.random() * 360) + 1
        // }deg)`;
      });
    }

    // return;
  }

  animatedMove(marker, t, current, moveto) {
    console.log('animating...');

    const deltalat = (moveto.lat() - current.lat()) / 100;
    const deltalng = (moveto.lng() - current.lng()) / 100;

    const delay = 10 * t;
    for (let i = 0; i < 100; i++) {
      (function (i) {
        setTimeout(function () {
          let lat = marker.position.lat();
          let lng = marker.position.lng();
          lat += deltalat;
          lng += deltalng;
          const latlng = new google.maps.LatLng(lat, lng);
          marker.setPosition(latlng);
        }, delay * i);
      })(i);
    }
  }
}

// subscribeNotification() {
//   this.fcmListener = this.fcm.onNotification().subscribe(
//     (data) => {
//       // alert(JSON.stringify(data));

//       let parsedData = data;
//       // let parsedData = JSON.parse(data.data);
//       switch (parsedData.type) {
//         case "localStatusStart":
//           swal("Ride Started !", "", "success");
//           break;
//         case "localStatusComplete":
//           swal("Ride Completed !", "", "success");
//           this.navCtrl.push("RideHistoryLocalPage").then((data) => {
//             this.navCtrl.remove(1);
//           });

//           break;

//         default:
//           break;
//       }
//     },
//     () => {}
//   );
// }
