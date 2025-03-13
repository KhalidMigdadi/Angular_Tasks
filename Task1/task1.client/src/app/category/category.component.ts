import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from '../Service/url-service.service'; // import from service.ts that i export it 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  


  // how can i make inject for the service inside this comp? by constr
  constructor(private _url: UrlServiceService) { }

  ngOnInit() { // when the page reload will work 
    this.getData();
  }

  category: any; // container for the (data) from API 

  getData() {
    this._url.getCategories().subscribe((data) => { // getCategories => the method that observed  // sub is i want to sub by this method to use the data inside it 
      this.category = data;
    });
  }
}


// inside the comp we will use

// to make injection 

// ngOnInit(); // the first one load

// constructor


// the function
