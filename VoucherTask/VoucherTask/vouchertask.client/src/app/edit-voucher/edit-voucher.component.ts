import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  constructor(private _url: UrlService, private _active: ActivatedRoute) { }

  voucherInfo: any

  ngOnInit() {
    let Id = this._active.snapshot.paramMap.get('id')// get the id from URL

    this._url.getVoucherById(Id).subscribe((data) => {
      this.voucherInfo = data;
    })
    
  }




  EditVoucher(data: any) {
    let Id = this._active.snapshot.paramMap.get('id')// get the id from URL

    this._url.editVoucher(Id, data).subscribe(() => {
      alert("The Voucher Edited Successfully")
    })
  }

}
