import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrl: './show-category.component.css'
})
export class ShowCategoryComponent {
  constructor(private _url: UrlService) { }

  ngOnInit() {
    this.getData()
  }

  category: any;

  getData() {
    this._url.getCategories().subscribe((data: any) => {
      this.category = data
    })
  }

}
