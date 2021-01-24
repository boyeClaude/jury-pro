import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CritereRoutingModule } from './critere-routing.module';
import { CritereComponent } from './critere/critere.component';
import { CritereListComponent } from './critere-list/critere-list.component';


@NgModule({
  declarations: [CritereComponent, CritereListComponent],
  imports: [
    CommonModule,
    CritereRoutingModule
  ]
})
export class CritereModule { }
