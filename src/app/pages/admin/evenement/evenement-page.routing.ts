import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterEvenementPageComponent } from './ajouter-evenement/ajouter-evenement-page.component';
import { ListeEvenementPageComponent } from './liste-evenement/liste-evenement-page.component';

const routes: Routes = [
  { path: 'add', 
    component: AjouterEvenementPageComponent, 
  },
  {
    path:'',
    component:ListeEvenementPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementPageRoutingModule {}
