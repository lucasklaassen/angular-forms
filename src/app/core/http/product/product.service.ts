import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  public getProducts(): Observable<Product[]> {
    return of([
      { name: 'Hamburger', price: 8, details: ['Medium rare patty', 'No cheese', 'Fresh garden tomato'] },
      { name: 'Pizza', price: 5, details: ['10 pieces of pepperoni', 'Light cheese', 'Homemade pizza sauce'] },
      { name: 'Hot Dog', price: 3, details: ['Chili-cheese dog', 'Heavy cheese', 'Condiments available'] }
    ]);
  }
}
