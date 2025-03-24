import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UrlService } from '../Service/url.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() user: any;

  @Output() userUpdated = new EventEmitter<any>();
  constructor(private _url: UrlService) { }

  userId: any;
  saveChanges() {

    this.userUpdated.emit(this.user);

  }

}
