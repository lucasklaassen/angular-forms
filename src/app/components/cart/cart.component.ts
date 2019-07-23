import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: Product[];
  constructor(private cartService: CartService) {}

  public ngOnInit(): void {
    this.cartService.products$.subscribe(results => {
      this.products = results;
    });
  }

  public totalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
