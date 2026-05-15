import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Products } from '../data-type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-seller-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css',
})
export class SellerHome implements OnInit {

  productList: any | Products[];
  selectedProductId: number | null = null;

  editId: number | null = null;
  backupProduct: Products | null = null;

  productForm: Products = {
    ProductName: '',
    ProductPrice: 0,
    ProductColor: '',
    ProductCategory: '',
    ProductDescriptions: '',
    ProductUrl: '',
    id: 0
  };

  constructor(private product: ProductService) { }

  ngOnInit(): void {

    // this.product.productList().subscribe((result) => {
    //   console.warn(result);
    //   this.productList=result;
    // })
    this.list();

  }

  deleteProduct(id: number) {
    console.warn("id", id);
    this.product.deleteProductList(id).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.productList = result;
      }
    })
    this.list();
  }

  list() {
    this.product.productList().subscribe((result) => {
      console.warn(result);
      this.productList = result;
    })
  }

  editProduct(item: Products) {
    this.selectedProductId = item.id;

    // you can later bind this to form
    // console.log("Editing:", item);
    this.editId = item.id;

    // backup original data (for cancel)
    this.backupProduct = { ...item };
  }


  updateProduct(item: Products) {
    this.product.updateProductList(item.id, item).subscribe(() => {
      this.editId = null;
    });
  }


  saveProduct(item: Products) {
    this.product.updateProductList(item.id, item).subscribe(() => {
      console.log("Updated successfully");

      this.editId = null;
      this.backupProduct = null;
      this.list();
    });
  }
}
