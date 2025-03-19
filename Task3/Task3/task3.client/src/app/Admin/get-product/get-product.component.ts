import { Component } from '@angular/core';
import { UrlService } from '../../Service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css'
})
export class GetProductComponent {

  Products: any;
  categoryId: any;
  constructor(private _url: UrlService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this._url.getProducts().subscribe((data) => {
      this.Products = data;
    })

  }
}
