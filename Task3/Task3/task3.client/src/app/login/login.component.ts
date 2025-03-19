import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _url: UrlService, private _route: Router) { }

  ngOnInit() { }

  userData: any;
  userLogin(loggedUser: any) {
    console.log('Logged User:', loggedUser); // Check if this prints correct values
    this._url.checkUser().subscribe((data) => {
      console.log('Users from API:', data); // Check what data comes from the API

      let userData = data.find((x: any) => x.Email == loggedUser.Email && x.password == loggedUser.password);

      if (userData) {
        alert("Logged In Successfully");
        this._route.navigate(["/cat"]);
      } else {
        alert("Invalid Username or Password");
      }
    });
  }


 

}
