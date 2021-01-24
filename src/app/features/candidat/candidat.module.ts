import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';


@NgModule({
  declarations: [CandidatComponent, CandidatListComponent],
  imports: [
    CommonModule,
    CandidatRoutingModule
  ]
})
export class CandidatModule { }
