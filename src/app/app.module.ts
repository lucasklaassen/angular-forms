import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CoreModule } from './core/core.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsListingComponent } from './pages/products-listing/products-listing.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, CartComponent, ProductsListingComponent, CheckoutComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
