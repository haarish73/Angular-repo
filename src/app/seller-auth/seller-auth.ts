import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Seller } from '../services/seller';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './seller-auth.html'
})

export class SellerAuth {

  constructor(private seller: Seller, private Router:Router) {}

  sellerForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

  signUp() {
    console.log(this.sellerForm.value);

    this.seller.userSignUp(this.sellerForm.value as signUp).subscribe((result) => {
      if(result){
        this.Router.navigate(['seller-home'])
      }
    });

  }

}