import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService }  from '../services/product'
import { Products } from  "../data-type"
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css',
  standalone:true
})
export class SellerAddProduct {
  addProductmessage : string | undefined;
  constructor(private product: ProductService,
    private router : Router
  ){}

  submit(data : Products){
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addProductmessage = "product created successfully";
        this.router.navigate(['/seller-home']);

      }
      setTimeout(() => {
        (this.addProductmessage = undefined), 3000
      })
    })
  }

}
