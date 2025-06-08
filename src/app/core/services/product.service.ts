import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductBySlug(slug: string): Observable<Product | undefined> {
    return new Observable((observer) => {
      this.getProducts().subscribe(products => {
        observer.next(products.find(p => p.slug === slug));
        observer.complete();
      });
    });
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return new Observable((observer) => {
      this.getProducts().subscribe(products => {
        observer.next(products.filter(p => p.category === category));
        observer.complete();
      });
    });
  }
}
