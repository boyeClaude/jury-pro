import { NgModule } from '@angular/core';
import { ListeEvenementModule } from 'src/app/features/admin/evenement/liste-evenement/liste-evenement.module';
import { ListeEvenementPageComponent } from './liste-evenement-page.component';


@NgModule({
    imports: [ListeEvenementModule],
    exports: [ListeEvenementPageComponent],
    declarations: [ListeEvenementPageComponent],
    providers: [],
})
export class ListeEvenementPageModule { }
