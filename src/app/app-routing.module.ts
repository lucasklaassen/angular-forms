import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsListingComponent } from './pages/products-listing/products-listing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductsListingComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
