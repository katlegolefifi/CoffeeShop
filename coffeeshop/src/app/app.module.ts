
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';

import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
