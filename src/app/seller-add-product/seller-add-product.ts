import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService }  from '../services/product'
import { Products } from  "../data-type"

@Component({
  selector: 'app-seller-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css',
  standalone:true
})
export class SellerAddProduct {
  addProductmessage : string | undefined;
  constructor(private product: ProductService){}

  submit(data : Products){
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addProductmessage = "product created successfully";

      }
      setTimeout(() => {
        (this.addProductmessage = undefined), 3000
      })
    })
  }

}
