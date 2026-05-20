import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }


  addProduct(data: Products) {
    return this.http.post('http://localhost:3000/products', data);
  }

  // product listing

  productList() {
    return this.http.get<Products[]>('http://localhost:3000/products')
  }

  deleteProductList(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  updateProductList(id: number, data: Products) {
    return this.http.put(`http://localhost:3000/products/${id}`, data);
  }

getProducts(limit: number){
  return this.http.get<Products[]>(
    `http://localhost:3000/products?_limit=${limit}`
  );
}

searchProducts(query: string) {
  return this.http.get<Products[]>(
    `http://localhost:3000/products?q=${query}`
  );
}

getProductById(id : number){
  return this.http.get<Products>(
    `http://localhost:3000/products/${id}`
  )
}

trendingproduct(limit: number) {
  return this.http.get<Products[]>(
    `http://localhost:3000/products?_limit=${limit}`
  );
}
}
