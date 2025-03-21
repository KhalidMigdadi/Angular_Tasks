import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CategoryComponent,
    SignInComponent,
    SignUpComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // make get and post to browser 
    AppRoutingModule,
    CoreModule  // that have all important thing in project 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
