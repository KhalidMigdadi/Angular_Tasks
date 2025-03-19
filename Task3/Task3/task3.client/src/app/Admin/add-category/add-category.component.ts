import { Component } from '@angular/core';
import { UrlService } from '../../Service/url.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private _url: UrlService) { }

  ngOnInit() { }


  addCategory(adminData: any) {
    this._url.addCat(adminData).subscribe(() => {
      alert("The category added sucessfullt")
    })
  }
}
