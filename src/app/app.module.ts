import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// @ngmodule object and its properties
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    // modules that depends appModule.ts component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
