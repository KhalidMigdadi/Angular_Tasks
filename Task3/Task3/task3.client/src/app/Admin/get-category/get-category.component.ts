import { Component } from '@angular/core';
import { UrlService } from '../../Service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {
  Categories: any;
  constructor(private _url: UrlService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this._url.getCategories().subscribe((data) => {
      this.Categories = data;
    })
  }
}
