import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-home',
  templateUrl: './shopping-home.page.html',
  styleUrls: ['./shopping-home.page.scss'],
})
export class ShoppingHomePage implements OnInit {
  showTitleSuggestions = false;
  showCitySuggesionts = false;
  titleSuggestions = [];
  selectedTitleSuggesion = '';
  citySuggestions = [];
  selectedCitySuggesion = '';
  sliceValue = 3;
  categories
  constructor(public http: HttpClient, public ds: DataService, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.getAllShoppingCategories();
  }

  getAllShoppingCategories(){
    this.http.get(this.ds.apiUrl + 'shopping-categories')
      .subscribe((data: any) => {
        this.categories = data.data;
        this.categories?.forEach(cat => {
        cat.icon = 'close';
        });
      });
  }

  categorySelected(catId, name){
    this.router.navigate(['vendor-by-category/'+catId+'/'+name]);
    console.info("cat presssed")
    // this.navCtrl.navigateForward('shopping-vendor-listing')
  }

}
