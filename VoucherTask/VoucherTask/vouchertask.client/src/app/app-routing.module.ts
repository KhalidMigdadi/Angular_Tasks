import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { EditVoucherComponent } from './edit-voucher/edit-voucher.component';

const routes: Routes = [
  { path: "voucher", component: VouchersComponent },
  { path: "addVoucher", component: AddVoucherComponent },
  { path: "editVoucher/:id", component: EditVoucherComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
