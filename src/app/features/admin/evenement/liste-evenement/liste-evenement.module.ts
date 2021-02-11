import { NgModule } from '@angular/core';
import { ListeEvenementComponent } from './liste-evenement.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [ListeEvenementComponent],
    declarations: [ListeEvenementComponent],
    providers: [],
})
export class ListeEvenementModule { }
