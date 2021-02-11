import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from 'src/app/pages/admin/dashboard/dashboard-page.component';
import { AdminComponent } from './admin/admin.component';
import { AjouterCandidatComponent } from './candidat/ajouter-candidat/ajouter-candidat.component';
import { ListeCandidatComponent } from './candidat/liste-candidat/liste-candidat.component';
import { AjouterCritereComponent } from './critere/ajouter-critere/ajouter-critere.component';
import { ListeCritereComponent } from './critere/liste-critere/liste-critere.component';
import { AjouterEvenementComponent } from './evenement/ajouter-evenement/ajouter-evenement.component';
import { ListeEvenementComponent } from './evenement/liste-evenement/liste-evenement.component';
import { AddGroupeCandidatComponent } from './groupe-candidat/add-groupe-candidat/add-groupe-candidat.component';
import { ListeGroupeCandidatComponent } from './groupe-candidat/liste-groupe-candidat/liste-groupe-candidat.component';
import { AjouterGroupeComponent } from './groupe/ajouter-groupe/ajouter-groupe.component';
import { ListeGroupeComponent } from './groupe/liste-groupe/liste-groupe.component';

const routes: Routes = [{ path: '', component: AdminComponent, 
children:[
  {path:'dashboard', component:DashboardPageComponent},
  {path:'evenement/add', component:AjouterEvenementComponent},
  {path:'evenement/liste', component:ListeEvenementComponent},
  {path:'critere/liste', component: ListeCritereComponent},
  {path:'critere/add', component: AjouterCritereComponent},
  {path:'candidat/add', component: AjouterCandidatComponent},
  {path:'candidat/liste', component: ListeCandidatComponent},
  {path:'groupe-candidat/liste', component: ListeGroupeCandidatComponent},
  {path:'groupe-candidat/add', component: AddGroupeCandidatComponent},
  {path:'groupe/liste', component: ListeGroupeComponent},
  {path:'groupe/add', component: AjouterGroupeComponent},
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
