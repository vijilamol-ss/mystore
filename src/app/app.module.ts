import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
// @ng module object and its properties
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    // modules that depends appModule.ts component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
