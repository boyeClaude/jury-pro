import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementPageModule } from './pages/evenement/evenement-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EvenementPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
