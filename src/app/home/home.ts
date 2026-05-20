import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { Products } from '../data-type';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgbCarouselModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  getProducts: Products[] = [];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.productList()
      .pipe(
        catchError(() => of([]))
      )
      .subscribe((data) => {
        this.getProducts = data.slice(0, 3);
      });
  }
}
