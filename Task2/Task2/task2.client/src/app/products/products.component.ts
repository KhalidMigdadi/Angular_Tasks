import { Component, OnInit } from '@angular/core';
import { UrlService, Products } from '../Service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  categoryId: number = 0;

  constructor(private _url: UrlService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));
      this.getData();
    });
  }

  getData() {
    this._url.getProducts().subscribe((data) => {
      this.products = data.filter(product => product.categoryId === this.categoryId); // Filter products by categoryId
    });
  }
}
