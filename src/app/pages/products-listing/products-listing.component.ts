import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/http/product/product.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html'
})
export class ProductsListingComponent implements OnInit {
  title = 'angular-services';

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.getProducts().subscribe(results => {
      this.products = results;
    });
  }
}
