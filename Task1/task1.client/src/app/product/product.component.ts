import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlServiceService } from '../Service/url-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  name: string = "Angular";
  constructor(private _ser: UrlServiceService, private _active: ActivatedRoute) { }  // ActivatedRoute we inject it tp get the data from URL

  ngOnInit() {

  }

  catId: any
  dataContainer: any

  get() {
    this.catId = this._active.snapshot.paramMap.get("id") // make screen shot the the parameter that from url and send to this method
    this._ser.getProducts(this.catId).subscribe((data: any) => {
      this.dataContainer = data.filter((p: any) => p.categoryId == this.catId) // categoryId is the column in API
    })
  }

}


