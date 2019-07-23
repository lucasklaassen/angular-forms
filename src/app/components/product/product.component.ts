import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  public addToCart(): void {
    this.cartService.addProduct(this.product);
  }
}
