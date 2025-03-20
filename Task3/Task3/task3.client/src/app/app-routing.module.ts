import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "cat", component: ShowCategoryComponent },
  { path: "pipe", component: PipesComponent },
  { path: "pro/:id", component: ShowProductsComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [

      { path: "addCat", component: AddCategoryComponent },
      { path: "addpro", component: AddProductComponent },
      { path: "getCat", component: GetCategoryComponent },
      { path: "getpro", component: GetProductComponent },
      { path: "editCat/:id", component: EditCategoryComponent }



    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
