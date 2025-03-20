import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ShowCategoryComponent,
    ShowProductsComponent,
    DashboardComponent,
    AddCategoryComponent,
    AddProductComponent,
    GetProductComponent,
    GetCategoryComponent,
    EditCategoryComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
