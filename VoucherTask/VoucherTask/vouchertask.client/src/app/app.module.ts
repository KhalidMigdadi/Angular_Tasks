import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { FormsModule } from '@angular/forms';
import { EditVoucherComponent } from './edit-voucher/edit-voucher.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VouchersComponent,
    AddVoucherComponent,
    EditVoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
