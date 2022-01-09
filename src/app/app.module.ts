import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFunctionComponent } from './angular-function/angular-function.component';
import { ChieldComponent } from './chield/chield.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularFunctionComponent,
    ChieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
