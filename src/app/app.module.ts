import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Stopka2Component } from './stopka/stopka.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Stopka2Component,
    FormularzComponent,
    ListaComponent,
    NawigacjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
