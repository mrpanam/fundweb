import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'Model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  backendUrl: string = "http://localhost:3000/products/"

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Array<Product>>(this.backendUrl)

  }

  public changeElig(product: Product): Observable<Product[]> {
    return this.http.patch<Product[]>(this.backendUrl + product.id, { eligible: !product.eligible })
  }

  public deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.backendUrl}${product.id}`);
  }


  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.backendUrl,
      product);
  }

  getProductById(productId: number) : Observable<Product>{
    return this.http.get<Product>(`${this.backendUrl}${productId}`);
  }


  updateProduct(product: Product) : Observable<Product>{
    return this.http.patch<Product>(`${this.backendUrl}${product.id}`,product);
  }

}
