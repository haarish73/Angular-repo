import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Seller } from './services/seller';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
})
export class App {
  // title:'ecom-project',
  constructor(private seller : Seller){}
  ngOnInit():void{
    this.seller.reloadSeller()
  }
}
