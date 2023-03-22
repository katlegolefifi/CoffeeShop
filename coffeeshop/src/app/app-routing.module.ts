import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [  
  {path: 'header', component:HeaderComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
