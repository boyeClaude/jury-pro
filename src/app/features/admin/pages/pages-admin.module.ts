import { NgModule } from '@angular/core';
import { CandidatPageComponent } from './candidat/candidat-page.component';
import { CriterePageComponent } from './critere/critere-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page.component';
import { EvenementPageComponent } from './evenement/evenement-page.component';
import { GroupeCandidatPageComponent } from './groupe-candidat/groupe-candidat-page.component';


@NgModule({
    imports: [],
    exports: [EvenementPageComponent, DashboardPageComponent,CriterePageComponent,CandidatPageComponent,GroupeCandidatPageComponent],
    declarations: [EvenementPageComponent,DashboardPageComponent, CriterePageComponent,CandidatPageComponent, GroupeCandidatPageComponent],
    providers: [],
})
export class PagesAdminModule { }
