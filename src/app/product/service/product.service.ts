import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.API_URL}/product`);
  }

  getProductById(productId: number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${this.API_URL}/product/${productId}`);
  }

  createProduct(product: IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${this.API_URL}/product/create`, product);
  }

  updateProduct(productId: number, product: IProduct): Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${this.API_URL}/product/update/${productId}`, product);
  }

  deleteProduct(productId: number): Observable<IProduct>{
    return this.httpClient.delete<IProduct>(`${this.API_URL}/product/delete?productId=${productId}`);
  }
}
