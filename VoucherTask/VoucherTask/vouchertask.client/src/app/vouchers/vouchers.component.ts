import { Component } from '@angular/core';
import { UrlService } from '../Service/url.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.css'
})
export class VouchersComponent {

  constructor(private _url: UrlService) { }

  ngOnInit() { this.seeVoucher() }

  voucherContainer: any;

  seeVoucher() {
    this._url.getVoucher().subscribe((data) => {
      this.voucherContainer = data
    })
  }


}
