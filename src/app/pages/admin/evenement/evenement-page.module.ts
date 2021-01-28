import { NgModule } from '@angular/core';
import { EvenementModule } from 'src/app/features/admin/evenement/evenement.module';
import { EvenementPageComponent } from './evenement-page.component';


@NgModule({
    imports: [EvenementModule],
    exports: [EvenementPageComponent],
    declarations: [EvenementPageComponent],
    providers: [],
})
export class EvenementPageModule { }
