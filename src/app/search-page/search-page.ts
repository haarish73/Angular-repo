import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../data-type';
import { ProductService } from '../services/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-page.html',
    styleUrls: ['./search-page.css']
})
export class SearchPage {

  searchProductList: Products[] = [];

  constructor(
  private productService: ProductService,
  private route: ActivatedRoute,
  private router: Router
) {}

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    const query = params['query'];

    this.productService.searchProducts(query)
      .subscribe((result: Products[]) => {
        this.searchProductList = result;
        console.log(result);
      });
  });
}
  openProduct(id: number) {
  this.router.navigate(['/product', id]);
}
}