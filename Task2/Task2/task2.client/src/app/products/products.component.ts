import { Component, OnInit } from '@angular/core';
import { UrlService, Products } from '../Service/url.service';
import { ActivatedRoute } from '@angular/router'; // is used to access route parameters
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  //products: Products[] = [];
  //categoryId: number = 0; // to store the catId from the URL
  //categoryId: any;

  //constructor(private _url: UrlService, private _active: ActivatedRoute) { }



  //ngOnInit() {
  //  this.getData();
  //}

  //getData() {
  //  this.categoryId = Number(this._active.snapshot.paramMap.get("id")); // Convert to number
  //  this._url.getProducts().subscribe((data) => {
  //    this.products = data.filter(product => product.categoryId === this.categoryId);
  //  });
  //}


  constructor(private _url: UrlService) { }

  onSubmit(data: any) {
    this._url.postData(data).subscribe(() => {
      alert("Add New Product is successfully!");
    });
  }



  //getData() {
  //  this.route.paramMap.subscribe(params => {
  //    this.categoryId = Number(params.get('id'));
  //    this._url.getProducts().subscribe((data) => {
  //      this.products = data.filter(product => product.categoryId === this.categoryId);
  //    });
  //  });







  //ngOnInit() {
  //  this.route.paramMap.subscribe(params => {
  //    this.categoryId = Number(params.get('id'));
  //    this.getData();
  //  });
  //}

  //getData() {
  //  this._url.getProducts().subscribe((data) => {
  //    this.products = data.filter(product => product.categoryId === this.categoryId); // Filter products by categoryId
  //  });


}
