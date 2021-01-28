import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatPageComponent } from 'src/app/pages/admin/candidat/candidat-page.component';
import { CriterePageComponent } from 'src/app/pages/admin/critere/critere-page.component';
import { DashboardPageComponent } from 'src/app/pages/admin/dashboard/dashboard-page.component';
import { EvenementPageComponent } from 'src/app/pages/admin/evenement/evenement-page.component';
import { GroupeCandidatPageComponent } from 'src/app/pages/admin/groupe-candidat/groupe-candidat-page.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{ path: '', component: AdminComponent, 
children:[
  {path:'dashboard', component:DashboardPageComponent},
  {path:'evenement', component:EvenementPageComponent},
  {path:'critere', component:CriterePageComponent},
  {path:'groupe-candidat', component:GroupeCandidatPageComponent},
  {path:'candidat', component:CandidatPageComponent},
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
