import { Component, OnInit } from '@angular/core';
import { UrlService, Category } from '../Service/url.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  constructor(private _url: UrlService) { }

  category: Category[] = []; // Store fetched data
  //category: any;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._url.getCategories().subscribe((data) => {
      this.category = data;
    })
  }

}
