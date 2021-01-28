import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CandidatPageComponent } from './pages/candidat/candidat-page.component';
import { CriterePageComponent } from './pages/critere/critere-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { EvenementPageComponent } from './pages/evenement/evenement-page.component';
import { GroupeCandidatPageComponent } from './pages/groupe-candidat/groupe-candidat-page.component';

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
