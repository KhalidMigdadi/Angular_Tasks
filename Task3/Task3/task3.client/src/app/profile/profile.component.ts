import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // إصلاح الخطأ
})
export class ProfileComponent {

  constructor(private _url: UrlService) { }
  logedUser: any;

  Popup = false;

  ngOnInit() {
    let Entereduser = sessionStorage.getItem('loggeduser');
    if (Entereduser) {
      this.logedUser = JSON.parse(Entereduser)
    }

  }
  openEditProfile() {
    this.Popup = true;
  }
  updateUser(data: any) {
    this.logedUser.Email = data.Email
    this.logedUser.password = data.password
    sessionStorage.setItem('loggeduser', JSON.stringify(this.logedUser))
    this.Popup = false
    this._url.updateUser(this.logedUser.id, this.logedUser).subscribe(() => { })

  }
}
