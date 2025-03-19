import { Component } from '@angular/core';
import { UrlService } from '../../Service/url.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {


  categories: any;
  constructor(private _url: UrlService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this._url.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  addProduct(product: any) {
    this._url.getProducts().subscribe(() => {
      alert("Product has been added successfully!");
    })
  }



}
