import { NgModule } from '@angular/core';
import { EvenementModule } from 'src/app/features/admin/evenement/evenement.module';
import { ListeEvenementModule } from 'src/app/features/admin/evenement/liste-evenement/liste-evenement.module';
import { EvenementPageComponent } from './evenement-page.component';


@NgModule({
    imports: [EvenementModule, ListeEvenementModule],
    exports: [EvenementPageComponent],
    declarations: [EvenementPageComponent],
    providers: [],
})
export class EvenementPageModule { }
