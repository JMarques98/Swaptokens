import { UniswapModule } from 'uniswap-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UniswapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
