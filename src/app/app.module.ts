import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFunctionComponent } from './angular-function/angular-function.component';
import { ChieldComponent } from './chield/chield.component';
import { Chield2Component } from './chield2/chield2.component';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    AngularFunctionComponent,
    ChieldComponent,
    Chield2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
