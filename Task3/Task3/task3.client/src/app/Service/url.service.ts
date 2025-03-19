import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  constructor(private http: HttpClient) { }

  ngOnInit() { }


  createUser(data: any): Observable<any> { // take the userData from comp.ts
    return this.http.post<any>('https://67cea6ee125cd5af757b6514.mockapi.io/Users', data) // return the API response
  }


  checkUser() {
    return this.http.get<any>('https://67cea6ee125cd5af757b6514.mockapi.io/Users') 
  }


  getCategories(): Observable<Category[]> { 
    return this.http.get<Category[]>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories');
  }

  getProducts(): Observable<Category[]> {
    return this.http.get<Category[]>('https://67d7325f9d5e3a10152a46a6.mockapi.io/Products');
  }


  addCat(data: any) {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories', data)
  }


  addPro(data: any) {
    return this.http.post('https://67d7325f9d5e3a10152a46a6.mockapi.io/Products', data)
  }
}
