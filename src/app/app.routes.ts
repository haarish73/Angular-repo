import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
// import {s} 
import { SellerHome } from './seller-home/seller-home';
import { authGuard } from './auth-guard';
import { SellerAddProduct } from './seller-add-product/seller-add-product';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuth
  },
  {
    path:'seller-home',
    component:SellerHome,
    canActivate : [authGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProduct,
    
    canActivate : [authGuard]
  }

];