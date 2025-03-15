import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface category {
  id: number;
  name: string;
  img: string
}

// i will use it gloably
@Injectable({ // this class => i can make inject for it and its for all project in all comp
  providedIn: 'root' // gloable in all the project 
})  


export class UrlServiceService { // export => becuase i want to use this data or the class in any comp

  // to use the API
  //_url is the second name for HttpClient class
  // HttpClient to watch the API and deal with it like get, post
  constructor(private _url: HttpClient) { } // i will deal with the browser , HttpClient is contain [get, post, ...]




  // make lestin for API => to call the API
  getCategories(): Observable<category[]> { // i make observe to get the data by sync way  and <cat> is the interface name
    return this._url.get<category[]>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories') // i return it to where ? => in the comp
    // anything i want to أوصله i will use this.
    // get is method to fetsh the url API
  }




  getProducts(catID: any): Observable<any> {
    return this._url.get<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/products') // the data will recived array of obj
  }


}
