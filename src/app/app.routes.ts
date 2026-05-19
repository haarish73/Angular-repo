import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
// import {s} 
import { SellerHome } from './seller-home/seller-home';
import { authGuard } from './auth-guard';
import { SellerAddProduct } from './seller-add-product/seller-add-product';
import { SearchPage } from './search-page/search-page';
import { Component } from '@angular/core';
import { ProductDetails } from './product-details/product-details';
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
   },
  {
    component:SearchPage,
    path:'search/:query'
  },

{
  path: 'product/:id',
  component: ProductDetails
}


];
