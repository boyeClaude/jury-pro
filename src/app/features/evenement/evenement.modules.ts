import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EvenementFeatureComponent } from './evenement-feature.component';


@NgModule({
    imports: [CommonModule,HttpClientModule],
    exports: [EvenementFeatureComponent],
    declarations: [EvenementFeatureComponent],
    providers: [],
})
export class EvenementModule { }
