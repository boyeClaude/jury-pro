import { NgModule } from '@angular/core';
import { CandidatPageModule } from './candidat/candidat-page.module';
import { CriterePageModule } from './critere/critere-page.module';
import { DashboardpageModule } from './dashboard/dashboard-page.module';
import { EvenementPageModule } from './evenement/evenement-page.module';
import { GroupeCandidatPageModule } from './groupe-candidat/groupe-candidat-page.module';


@NgModule({
    imports: [
        CandidatPageModule, 
        CriterePageModule,
        DashboardpageModule, 
        EvenementPageModule, 
        GroupeCandidatPageModule
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class AdminPageModule { }
