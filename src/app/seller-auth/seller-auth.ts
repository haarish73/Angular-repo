import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Seller } from '../services/seller';
import { Router } from '@angular/router';
import { logIn, signUp } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './seller-auth.html'
})

export class SellerAuth {

  constructor(private seller: Seller, private Router:Router) {}
  showLogin=true;

  sellerForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

login() {
  const loginData = {
    email: this.sellerForm.value.email,
    password: this.sellerForm.value.password
  };

  console.log('login data', loginData);
}
  signUp() {
    console.log(this.sellerForm.value);

    this.seller.userSignUp(this.sellerForm.value as signUp)

  }

 openLogin() {
  this.showLogin = true;
}

openSignUp() {
  this.showLogin = false;
}
logIn() {

  console.log(this.sellerForm.value);

  this.seller.userLogIn(this.sellerForm.value as logIn);

}
}