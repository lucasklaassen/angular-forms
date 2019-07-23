import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products = new BehaviorSubject<Product[]>([]);
  public products$ = this.products.asObservable();

  constructor() {}

  public addProduct(product: Product): void {
    this.products.value.push(product);
    this.products.next(this.products.value);
  }
}
