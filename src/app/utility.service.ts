import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  operators = [
    {
      "ID": 1,
      "OperatorName": "Airtel",
      "APICode": "MAT"
    },

    {
      "ID": 7,
      "OperatorName": "Bsnl ",
      "APICode": "MBS"
    },
    {
      "ID": 9,
      "OperatorName": "Vodafone-Idea",
      "APICode": "MID"
    },
    {
      "ID": 10,
      "OperatorName": "Jio",
      "APICode": "MJP"
    }
  ]
  regions = [

    {
      "ID": 2,
      "Name": "Andhra Pradesh",
      "APICode": "AP"
    },

    {
      "ID": 4,
      "Name": "Assam",
      "APICode": "ASM"
    },
    {
      "ID": 5,
      "Name": "Bihar",
      "APICode": "BR"
    },
    {
      "ID": 6,
      "Name": "Maharashtra",
      "APICode": "MH"
    },
    {
      "ID": 7,
      "Name": "Chennai",
      "APICode": "CNN"
    },


    {
      "ID": 12,
      "Name": "Gujarat",
      "APICode": "GJ"
    },
    {
      "ID": 13,
      "Name": "Haryana",
      "APICode": "HR"
    },
    {
      "ID": 14,
      "Name": "Himachal Pradesh",
      "APICode": "HP"
    },

    {
      "ID": 16,
      "Name": "Karnataka",
      "APICode": "KT"
    },
    {
      "ID": 17,
      "Name": "Kerala",
      "APICode": "KL"
    },
    {
      "ID": 18,
      "Name": "Madhya Pradesh",
      "APICode": "MP"
    },

    {
      "ID": 23,
      "Name": "New Delhi",
      "APICode": "DL"
    },
    {
      "ID": 24,
      "Name": "Odisha",
      "APICode": "OD"
    },

    {
      "ID": 26,
      "Name": "Punjab",
      "APICode": "PB"
    },
    {
      "ID": 27,
      "Name": "Rajasthan",
      "APICode": "RJ"
    },

    {
      "ID": 29,
      "Name": "Tamil Nadu",
      "APICode": "TN"
    },


    {
      "ID": 32,
      "Name": "Uttar Pradesh-EAST",
      "APICode": "UPE"
    },

    {
      "ID": 34,
      "Name": "West Bengal",
      "APICode": "WB"
    },
    {
      "ID": 35,
      "Name": "Jammu and Kashmir",
      "APICode": "JK"
    },

    {
      "ID": 38,
      "Name": "Kolkata",
      "APICode": "KOL"
    },
    {
      "ID": 39,
      "Name": "Mumbai",
      "APICode": "BOM"
    },
    {
      "ID": 40,
      "Name": "North East",
      "APICode": "NE"
    },
    {
      "ID": 41,
      "Name": "Uttar Pradesh-WEST",
      "APICode": "UPW"
    }
  ]
  amount = 0
  segment = 'FULLTT'
  phone = ""
  plans = undefined
  operatorCode
  operatorName = ""
  operatorRegionName = ""

  tempOperatorRegionName = ""
  tempOperatorCode
  tempOperatorName = ""
  tempOperatorRegion = ""
  constructor(public dataService: DataService, public iab: InAppBrowser) { }
  fetchOperator() {
    if ((this.phone + "").length != 10)
      return this.dataService.presentToast("Invalid Phone Number")
    if (+(this.phone + "")[0] < 6)
      return this.dataService.presentToast("Invalid Phone Number")

    this.dataService.present('Getting Operators...')
    this.dataService._post('recharges/getOperator', "", {
      phone: this.phone
    }).subscribe(d => {
      this.dataService.dismiss()
      this.operatorCode = d.data.Data.OperatorCode
      this.operatorName = d.data.Data.Operator
      this.operatorRegionName = d.data.Data.Circle
      if (d.data.StatusCode)
        this.fetchPlans(d.data.Data.OperatorCode, d.data.Data.CircleCode)
      else {
        this.dataService.presentToast("Unable to fetch plans")
      }
      // this.plans = d
    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something went wrong")

    })
  }
  fetchPlans(operatorCode, circleCode) {

    this.dataService.present('Getting Plans...')
    this.dataService._post('recharges/plans', "", {
      phone: this.phone,
      "operatorCode": operatorCode,
      "circleCode": circleCode
    }).subscribe(d => {
      this.dataService.dismiss()
      if (d.data.StatusCode == 1) {

        if (this.tempOperatorName && this.tempOperatorRegionName) {
          this.operatorName = this.tempOperatorName
          this.operatorRegionName = this.tempOperatorRegionName
          this.operatorCode = operatorCode
        }
      } else {

      }
      this.plans = d
    }, e => {
      this.dataService.dismiss()
      this.dataService.presentToast("Something went wrong")

    })

  }
  recharge(amount) {
    if (+amount > 500)
      return alert('Currently only Recharges of less than 500 are allowed')
    // alert("Will add payment gateway")
    // this.busService.coupon.couponDiscountedTotal


    let browser = this.iab.create(`https://effoapp.com/payment/payment_v1.html?billing_email=${this.dataService.profile.email}&billing_tel=${this.dataService.profile.phone}&order_id=123&amount=${amount}`)
    browser.on('loadstop').subscribe(d => {
      console.log('loadstop', d);
      // if (d.url.includes('ccavResponseHandler')) {
      if (d.url.includes('api/payments/success')) {
        browser.close()
        // alert("Payment")
        this.dataService.present()
        this.dataService._post('recharges/recharge', "", {
          phone: this.phone + "",
          "userId": this.dataService.profile.id,
          "amount": amount,
          "operatorCode": this.operatorCode
        }).subscribe(d => {
          this.dataService.dismiss()
          this.plans = d
          if (d.status)
            this.dataService.confirmSwal('Recharge Successfull')
        }, e => {
          this.dataService.dismiss()
          this.dataService.presentToast("Something went wrong")

        })

        // this.navCtrl.navigateForward(['/'])

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


}
