import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Data, Router } from '@angular/router';
import { CabService } from '../services/cab.service';
import { DataService } from '../services/data.service';

declare var google;
@Component({
  selector: 'app-cab-home',
  templateUrl: './cab-home.page.html',
  styleUrls: ['./cab-home.page.scss'],
})
export class CabHomePage implements OnInit {
  pinImage = 'fromPin';
  // pickAddress =''
  // dropAddress =''
  fromPinMarker;
  toPinMarker;

  animatedClass = ' '
  // animatedClass = 'animate-bounce '
  // fromPinLocation = undefined;
  // toPinLocation = undefined;
  @ViewChild('map') mapRef: ElementRef;
  map;
  directline
  @ViewChild('pickSearch') public pickSearchElementRef: ElementRef;
  @ViewChild('search') public searchElementRef: ElementRef;

  pickAutocomplete;
  autocomplete;


  slider: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 4.5,
    autoplay: true,
    center: true
  };

  constructor(public cabService: CabService, public router: Router, public ds: DataService) {
    //reset everything
    this.resetEverything();
  }
  changeType(type) {
    this.cabService.type = type
  }

  history() {
    this.router.navigate(['/cab-history'])
  }
  resetEverything() {
    this.pinImage = 'fromPin';
    this.cabService.from = '';
    this.cabService.to = '';
    this.cabService.fromLatLngObject = undefined;
    this.cabService.toLatLngObject = undefined;
  }
  ngOnInit() { }
  ionViewDidEnter() {
    // alert(this.cabService.selectedCityObj.lat)
    console.log('ref', this.mapRef);
    const location = new google.maps.LatLng(
      this.cabService.selectedCityObj.lat,
      this.cabService.selectedCityObj.lng
    );
    const options = {
      center: location,
      zoom: 14,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);


    this.addDragEndEvent();
    this.autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement,
      {
        types: [],
      }
    );
    this.pickAutocomplete = new google.maps.places.Autocomplete(
      this.pickSearchElementRef.nativeElement,
      {
        types: [],
      }
    );

    this.autocomplete.bindTo('bounds', this.map);
    this.pickAutocomplete.bindTo('bounds', this.map);

    //THIS IS EXECUTED WHEN THE LOCATION FROM PICK BOX IS SELECTED #PICKINPUT
    this.pickAutocomplete.addListener('place_changed', () => {
      if (this.directline)
        this.directline.setMap(null)
      this.cabService.from = this.pickSearchElementRef.nativeElement.value;
      this.cabService.to = '';
      // this.dropAddress = this.searchElementRef.nativeElement.value;

      // first change the pin image
      this.pinImage = 'fromPin';
      // then remove the fromPinMarker]
      console.log(this.fromPinMarker);

      // eslint-disable-next-line eqeqeq
      if (this.fromPinMarker != undefined) {
        this.fromPinMarker.setMap(null);
      }
      this.fromPinMarker = undefined;
      // move the user to the location entered in the pick location input box autocomplete
      this.map.panTo(
        new google.maps.LatLng(
          this.pickAutocomplete.getPlace().geometry.location.lat(),
          this.pickAutocomplete.getPlace().geometry.location.lng()
        )
      );

      // also save the city from the response in ds fromcity
      // now get the city from the result
      // this.http2
      //   .get(
      //     "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      //       this.pickAutocomplete.getPlace().geometry.location.lat() +
      //       "," +
      //       this.pickAutocomplete.getPlace().geometry.location.lng() +
      //       "&key=" +
      //       this.cabService.apiKey,
      //     {
      //       params: {
      //         result_type: "locality",
      //       },
      //     }
      //   )
      //   .toPromise()
      //   .then((data: any) => {
      //     let parsedData = data;
      //     console.log(
      //       "converted selected city lat lng to get exact city string",
      //       parsedData
      //     );
      //     if (parsedData.results.length == 0) {
      //       this.checkLocationAvailability(
      //         "noCity"
      //         // this.dataService.homePageConfig.category != "outstation"
      //       );
      //       return;
      //     }
      //     this.dataService.fromPickCity =
      //       parsedData.results[0].address_components[0].long_name;
      //     this.checkLocationAvailability(
      //       parsedData.results[0].address_components[0].long_name
      //     );
      //     console.log("fromPickCity : ", this.dataService.fromPickCity);
      //   })
      //   .catch((err) => {
      //     alert("Connection Error !");
      //     console.log("error converting the lnt lng to city");
      //   });

      // if (this.dataService.homePageConfig.category == "outstation") {
      //   this.dataService.outstation.from_lat = this.map.getCenter().lat();
      //   this.dataService.outstation.from_lng = this.map.getCenter().lng();
      // }
    });

    // THIS IS EXECUTED WHEN A LOCATION IS SELECTED FROM THE INPUT BOX OF DROP LOCATION #DROPINPUT
    this.autocomplete.addListener('place_changed', () => {
      // first change the pin image
      this.pinImage = 'toPin';

      // mark the location with the frompin location only if its not marked previously

      // if (this.fromPinMarker == undefined) {
      // this.fromPinLocation = this.map.getCenter();
      // if(this.fromPinMarker)
      // this.fromPinMarker.setMap(null);
      if (!this.cabService.fromLatLngObject)
        this.cabService.fromLatLngObject = this.map.getCenter();
      console.log('saved fromLatLngObject', this.cabService.fromLatLngObject);

      if (!this.fromPinMarker) {
        this.fromPinMarker = new google.maps.Marker({
          // position: this.cabService.from,
          position: { lat: this.cabService.fromLatLngObject.lat(), lng: this.cabService.fromLatLngObject.lng() },
          map: this.map,
          icon: {
            url: 'assets/cab/fromPin.png',
            scaledSize: new google.maps.Size(40, 40), // scaled size
            // origin: new google.maps.Point(0, 0), // origin
            // anchor: new google.maps.Point(0, 0) // anchor
          },
        });
      }

      this.map.panTo(
        new google.maps.LatLng(
          this.autocomplete.getPlace().geometry.location.lat(),
          this.autocomplete.getPlace().geometry.location.lng()
        )
      );

      // alert(autocomplete.getPlace()+"placechanged")
      console.log('autocomplete address', this.autocomplete.getPlace());
      // this.dropAddress = this.autocomplete.getPlace().name;
      this.cabService.to = this.autocomplete.getPlace().formatted_address;
    });
  }

  book() {
    // this.cabService.from;

    this.cabService.toLatLngObject = this.map.getCenter();
    console.log(this.cabService.fromLatLngObject);
    console.log(this.cabService.toLatLngObject);



    if (!this.cabService.from || !this.cabService.to) {
      return this.ds.presentToast("Need Proper From / To Location");
    } else if (!this.cabService.from) {
      return;
    }

    // this.router.navigate(['/cab-out-booking']);
    this.router.navigate(['/cab-confirm-booking']);
  }

  addDragEndEvent() {
    this.map.addListener('zoom_changed', () => {
      console.log('zoom_changed');

      if (this.pinImage == 'toPin') {
        // this.map.panTo(
        //   new google.maps.LatLng(
        //     this.cabService.toLatLngObject.lat(),
        //     this.cabService.toLatLngObject.lng()
        //   )
        // );
      }
      // this.drawDirectline()
    });
    this.map.addListener('drag', () => {
      console.log('dragging.');
      if (this.pinImage == 'toPin')
        this.drawDirectline()
    });
    this.map.addListener('dragend', () => {



      // dont show if the category  is outstaion
      if (this.cabService.type === 'outstation') {
        // eslint-disable-next-line eqeqeq
        if (this.pinImage == 'fromPin') {
          // console.log(this.map.getCenter());
          // this.dataService.outstation.from_lat = this.map.getCenter().lat();
          // this.dataService.outstation.from_lng = this.map.getCenter().lng();
        } else {


        }
        return;
      }

      if (this.pinImage === 'fromPin') {
        this.fillPickAddress();
      } else {
        this.cabService.toLatLngObject = this.map.getCenter();
        console.log('DRAG ENDED FOR DROP PIN');
        this.fillDropAddress();
      }
    });
  }
  drawDirectline() {
    if (this.directline)
      this.directline.setMap(null)
    // this.directline = new google.maps.Polyline({
    //   path: [
    //     { lat: this.cabService.fromLatLngObject.lat(), lng: this.cabService.fromLatLngObject.lng() },
    //     { lat: this.map.getCenter().lat(), lng: this.map.getCenter().lng() },
    //   ],
    //   strokeOpacity: 0,
    //   icons: [
    //     {
    //       icon: {
    //         path: "M 0,-1 0,1",
    //         strokeOpacity: 1,
    //         scale: 3,
    //       },
    //       offset: "0",
    //       repeat: "15px",
    //     },
    //   ],
    //   map: this.map,
    // })
  }
  fillPickAddress(resp = undefined) {
    let locationCord;
    // eslint-disable-next-line eqeqeq
    if (resp != undefined) {
      locationCord = new google.maps.LatLng(
        resp.coords.latitude,
        resp.coords.longitude
      );
    } else {
      locationCord = this.map.getCenter();
    }

    // alert(this.map.getCenter());

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        location: locationCord,
      },
      (results, status) => {
        if (!results.length) {
          return;
        }

        this.cabService.from = results[0].formatted_address;

        // now get the city from the result
        // TODO will add the remaining logic later of if the city is acceptable or not

        // results.forEach((element) => {
        //   if (element.types[0] == 'locality') {
        //     console.log(
        //       'found city in the response',
        //       element.address_components[0].long_name
        //     );

        //     this.dataService.fromPickCity =
        //       element.address_components[0].long_name;

        //     this.checkLocationAvailability(
        //       element.address_components[0].long_name,
        //       locationCord
        //     );
        //   }
        // });

        console.log('other time pick address geocoder result', results);
        //also clear the to input location. the user will enter it again
        // this.clearToInputLocation();
        this.cabService.to = '';
      }
    );
  }
  segmentChanged(ev) {
    // reset everything
    this.resetEverything();
    // this.pinImage = 'fromPin';
    // this.cabService.from = '';
    // this.cabService.to = '';
    // console.log(ev);
  }
  clear(type = 'from') {
    if (type === 'from') {
      this.cabService.from = '';
      this.cabService.to = '';
    } else {
      this.cabService.to = '';
    }
  }
  fillDropAddress() {
    // alert(this.map.getCenter());

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        location: this.map.getCenter(),
      },
      (results, status) => {
        if (!results.length) {
          return;
        }

        this.cabService.to = results[0].formatted_address;
        // TODO will add the remaining logic later of if the city is acceptable or not

        // results.forEach((element) => {
        //   if (element.types[0] == "locality") {
        //     console.log(
        //       "found city in the response",
        //       element.address_components[0].long_name
        //     );
        //     this.dataService.toPickCity =
        //       element.address_components[0].long_name;
        //     this.checkLocationAvailability();
        //   }
        // });
      }
    );
  }
}
