import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvenementModule } from 'src/app/features/evenement/evenement.modules';
import { EvenementPageComponent } from './evenement-page.component';


@NgModule({
    imports: [CommonModule, EvenementModule],
    exports: [EvenementPageComponent],
    declarations: [EvenementPageComponent],
    providers: [],
})
export class EvenementPageModule { }
