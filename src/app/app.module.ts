import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PruebasriComponent } from './pruebasri/pruebasri.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebasriComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
