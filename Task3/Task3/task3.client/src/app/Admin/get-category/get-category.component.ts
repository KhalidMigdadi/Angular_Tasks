import { Component } from '@angular/core';
import { UrlService } from '../../Service/url.service';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {
  Categories: any;
  constructor(private _url: UrlService) { }

  ngOnInit() {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this._url.getCategories().subscribe((data) => {
      this.Categories = data;
    })
  }
}
