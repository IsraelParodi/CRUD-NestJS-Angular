import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Product} from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BACKEND_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BACKEND_URL}/product`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BACKEND_URL}/product/${id}`);
  }

  showProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BACKEND_URL}/product/show/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BACKEND_URL}/product`, product);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.BACKEND_URL}/product/${id}`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.BACKEND_URL}/product/${id}`);
  }
}
