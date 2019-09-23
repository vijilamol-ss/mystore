// file is to import all modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // imported for banana in a box(ngModule definitions are in this module)
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // for communicate with rest api

//  user defined modules

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

// @ng module object and its properties definition part
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    AppRoutingModule, // routing module
    BrowserModule,
    FormsModule, // formsModule is for banana in a box
    HttpClientModule // imported above is include here
    // modules that depends appModule.ts component
  ],
  providers: [], //  all services used are specified here to load when app is loaded.
  bootstrap: [AppComponent]
})
export class AppModule { }
