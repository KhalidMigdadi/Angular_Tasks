import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _url: UrlService) { }

  ngOnInit() { }



  user: any;

  addUser(data: any) { // pass the data from the form to the service
    this._url.createUser(data).subscribe(() => {
      return this.user = data;
    })
  }

}
