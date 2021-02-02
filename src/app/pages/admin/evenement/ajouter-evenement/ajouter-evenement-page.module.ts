import { NgModule } from '@angular/core';
import { AjouterEvenementModule } from 'src/app/features/admin/evenement/ajouter-evenement/ajouter-evenement.module';
import { AjouterEvenementPageComponent} from './ajouter-evenement-page.component';


@NgModule({
    imports: [AjouterEvenementModule],
    exports: [AjouterEvenementPageComponent],
    declarations: [AjouterEvenementPageComponent],
    providers: [],
})
export class AjouterEvenementPageModule { }
