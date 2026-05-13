import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
// import {s} 
import { SellerHome } from './seller-home/seller-home';
import { authGuard } from './auth-guard';
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
  }

];