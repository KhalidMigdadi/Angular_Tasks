import { Component } from '@angular/core';
import { UrlService } from '../../Service/url.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  constructor(private _url: UrlService, private _active: ActivatedRoute, private _router: Router) { }

  categoryContainer: any; // save the data from Server like name and description

  ngOnInit() {
    let category = this._active.snapshot.paramMap.get("id"); // get the category ID from the url
    this._url.getCategoryByCategoryId(category).subscribe((data) => { // go to server by API and req the ID
                                              // sunscribe => when the data back from server and store it in category container
      this.categoryContainer = data // here the data is ready for edit
    })
  }


  categoryId: any; // store ID that we want to edit it 

  updateCat(data: any) { // this method will make the edit 
    this.categoryId = this._active.snapshot.paramMap.get("id");     // get the ID from URL
    this._url.editCategory(this.categoryId, data).subscribe(() => { // its go to the server and says edit the (categoryId) with the new (data) and the data will get from the form (the new data)
                                                // subscribe => when the data edited successfully it will make alert
      alert("updated successfully")
    })
  }

}
