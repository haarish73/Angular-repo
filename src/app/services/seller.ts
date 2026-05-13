import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class Seller {
  isSelllerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient, private router : Router){}
    userSignUp(data: signUp) {
  this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
    .subscribe((result) => {

      localStorage.setItem('user', JSON.stringify(result.body));

      this.isSelllerLoggedIn.next(true);

      this.router.navigate(['seller-home']); 

    });
}

reloadSeller() {
  if (localStorage.getItem('user')) {
    this.isSelllerLoggedIn.next(true);
  }
}
}
