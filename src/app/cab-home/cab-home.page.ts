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
  pinImage='fromPin'
// pickAddress =''
// dropAddress =''
fromPinMarker
toPinMarker

  fromPinLocation = undefined;
  toPinLocation = undefined;
  @ViewChild("map") mapRef: ElementRef;
  map
  fromLocationText=""
  toLocationText=""
  @ViewChild("pickSearch") public pickSearchElementRef: ElementRef;
  @ViewChild("search") public searchElementRef: ElementRef;
  pickAutocomplete;
  autocomplete;
  constructor(public cabService:CabService,public router:Router) {

   }

  ngOnInit() {
    
  }
  ionViewDidEnter	(){
    // alert(this.cabService.selectedCityObj.lat)
    console.log('ref',this.mapRef);
    const location = new google.maps.LatLng(
   this.cabService.selectedCityObj.lat,    this.cabService.selectedCityObj.lng

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

    this.autocomplete.bindTo("bounds", this.map);
    this.pickAutocomplete.bindTo("bounds", this.map);


     
        //THIS IS EXECUTED WHEN THE LOCATION FROM PICK BOX IS SELECTED #PICKINPUT
        this.pickAutocomplete.addListener("place_changed", () => {
       
          this.fromLocationText = this.pickSearchElementRef.nativeElement.value;
          this.toLocationText = "";
          // this.dropAddress = this.searchElementRef.nativeElement.value;
    
          // first change the pin image
          this.pinImage = "fromPin";
          // then remove the fromPinMarker]
          console.log(this.fromPinMarker);
    
          if (this.fromPinMarker != undefined) this.fromPinMarker.setMap(null);
          this.fromPinMarker=undefined
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
    this.autocomplete.addListener("place_changed", () => {
      // first change the pin image
      this.pinImage = "toPin";

      // mark the location with the frompin location only if its not marked previously

      // if (this.fromPinMarker == undefined) {
      this.fromPinLocation = this.map.getCenter();
      // if(this.fromPinMarker)
      // this.fromPinMarker.setMap(null);
      // this.dataService.local.fromLatLngObject = this.map.getCenter();
      // alert(this.fromPinMarker)
      if(!this.fromPinMarker)
      this.fromPinMarker = new google.maps.Marker({
        position: this.fromPinLocation,
        map: this.map,
        icon: {
          url: "assets/cab/fromPin.png", 
        },
      });

      this.map.panTo(
        new google.maps.LatLng(
          this.autocomplete.getPlace().geometry.location.lat(),
          this.autocomplete.getPlace().geometry.location.lng()
        )
      );

      // alert(autocomplete.getPlace()+"placechanged")
      console.log("autocomplete address", this.autocomplete.getPlace());
      // this.dropAddress = this.autocomplete.getPlace().name;
      this.toLocationText = this.autocomplete.getPlace().formatted_address;

   
    });
  }

  segmentChanged(){
    
  }

}
