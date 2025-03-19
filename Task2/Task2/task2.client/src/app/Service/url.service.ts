import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  img: string;
}

export interface Products {
  id: number;
  name: string;
  img: string;
  categoryId: number;
}

@Injectable({ // you can make inject anywhere
  providedIn: 'root'
})


export class UrlService {
  private CatAPIUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories';
  private ProAPIUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';


  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {  // Observable make sync for the data, the method make lestien for the Observable if she get the data or not and when the data arrive the sub will work
    return this.http.get<Category[]>(this.CatAPIUrl);
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.ProAPIUrl)
  }







  postData(data: any) {

    return this.http.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);

  }



}
