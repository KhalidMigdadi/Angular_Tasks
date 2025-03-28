import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { DirectivesComponent } from './directives/directives.component';


const routes: Routes = [
  { path: "signIn", component: SignInComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "cat", component: CategoryComponent },
  //{ path: "pro/:id", component: ProductsComponent }, // the id here is the Primary key
  { path: "dir", component: DirectivesComponent },
  { path: "pro", component: ProductsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
