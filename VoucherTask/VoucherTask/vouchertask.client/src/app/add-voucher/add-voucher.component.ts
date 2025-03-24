import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {

  constructor(private _url: UrlService) { }

  AddVoucher(voucherData: any) {
    this._url.addVoucher(voucherData).subscribe(() => {
      alert("The Voucher Added successfully")
    })
  }

}
