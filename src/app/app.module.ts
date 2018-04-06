import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormulariocedulaComponent } from './formulariocedula/formulariocedula.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulariocedulaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
