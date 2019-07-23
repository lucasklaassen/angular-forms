import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/http/product/product.service';
import { Product } from './core/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-services';

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.getProducts().subscribe(results => {
      this.products = results;
    });
  }
}
