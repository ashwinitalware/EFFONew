import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CabService } from '../services/cab.service';

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

  // fromPinLocation = undefined;
  // toPinLocation = undefined;
  @ViewChild('map') mapRef: ElementRef;
  map;
  @ViewChild('pickSearch') public pickSearchElementRef: ElementRef;
  @ViewChild('search') public searchElementRef: ElementRef;

  pickAutocomplete;
  autocomplete;

  slides = [

    {
      url: 'assets/rushgocab/auto.png',
      label:'Auto',
      link:'autohome',
    },
    {
      url: 'assets/rushgocab/local.png',
      label:'Local',
      link:'cab-home'
    },
    {
      url: 'assets/rushgocab/outstation.png',
      label:'Outstation',
      link:'outstation'
    },
    {
      url: 'assets/rushgocab/renatl.png',
      label:'Rental',
      link:'rental'
    },
    {
      url: 'assets/rushgocab/transport.png',
      label:'Transport',
      link:'transporthome'
      // label:'Transport(Goods Delivery)'
    },

  ]
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4.5,
    autoplay: false,
  };

  slideOptss = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };



  constructor(public cabService: CabService, public router: Router) {
    //reset everything
    this.resetEverything();
  }
  resetEverything() {
    this.pinImage = 'fromPin';
    this.cabService.from = '';
    this.cabService.to = '';
    this.cabService.fromLatLngObject = undefined;
    this.cabService.toLatLngObject = undefined;
  }
  ngOnInit() {}

  navigate(slide) {
    if (slide.link) {
      this.router.navigate(['/' + slide.link])
    }

    else {
      alert('Coming Soon')
    }
  }

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
      this.cabService.fromLatLngObject = this.map.getCenter();
      // alert(this.fromPinMarker)
      if (!this.fromPinMarker) {
        this.fromPinMarker = new google.maps.Marker({
          position: this.cabService.from,
          map: this.map,
          icon: {
            url: 'assets/cab/fromPin.png',
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
    if (
      // eslint-disable-next-line eqeqeq
      this.cabService.type == 'local' ||
      // eslint-disable-next-line eqeqeq
      this.cabService.type == 'outstation'
    ) {
      if (!this.cabService.from || !this.cabService.to) {
        return;
      } else if (!this.cabService.from) {
        return;
      }
    }

    this.router.navigate(['/cab-confirm-booking']);
  }

  addDragEndEvent() {
    this.map.addListener('dragend', () => {
      // dont show if the category  is outstaion
      if (this.cabService.type === 'outstation') {
        // eslint-disable-next-line eqeqeq
        if (this.pinImage == 'fromPin') {
          // console.log(this.map.getCenter());
          // this.dataService.outstation.from_lat = this.map.getCenter().lat();
          // this.dataService.outstation.from_lng = this.map.getCenter().lng();
        }
        return;
      }

      if (this.pinImage === 'fromPin') {
        this.fillPickAddress();
      } else {
        this.fillDropAddress();
      }
    });
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
