import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // the root of the website
  apiRoot: string = "https://67cd64b6dd7651e464ee3d63.mockapi.io";

  // first we have to make inject for service that call httpclient to use it 
  constructor(private http: HttpClient) { }

  doget() {
     
  }
}
