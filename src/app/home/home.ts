import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { Products } from '../data-type';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgbCarouselModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  getProducts: undefined | Products[];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');

  this.product.getProducts(3).subscribe((data) => {
  this.getProducts = data;


      console.log('Assigned populateProduct:', this.getProducts);
    });
  }
}