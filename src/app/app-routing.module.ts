import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // routing module is imported and is already in angular
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

// (refer query params and router params)

const routes: Routes = [{
  path: '',
  component: ProductListComponent
  },
  { // Custom paths
  path: 'product/:productId',
  component: ProductDetailsComponent
  },
  {
  path: 'checkout',
  component: CheckoutComponent
  },
  {
  path: '**',
  redirectTo: ''
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
