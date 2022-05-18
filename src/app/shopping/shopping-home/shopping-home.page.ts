import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(public http: HttpClient, public ds: DataService) { }

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

  categorySelected(ev){}

}
