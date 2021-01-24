import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EvenementFeatureComponent } from './evenement/evenement-feature.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [EvenementFeatureComponent],
  exports: [],
  providers: [],
})
export class EvenementModule {}
