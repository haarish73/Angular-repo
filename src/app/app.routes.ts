import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
// import {s} 
import { SellerHome } from './seller-home/seller-home';
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
    component:SellerHome
  }

];