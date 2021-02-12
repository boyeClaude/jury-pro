import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ComponentModule } from './components/component.module';
import { DashboardpageModule } from 'src/app/pages/admin/dashboard/dashboard-page.module';
import { ListeEvenementModule } from './evenement/liste-evenement/liste-evenement.module';
import { AjouterEvenementModule } from './evenement/ajouter-evenement/ajouter-evenement.module';
@NgModule({
  imports: [
    CommonModule,
    AdminComponent,
    ListeEvenementModule,
    AjouterEvenementModule,
    AdminRoutingModule, 
    ComponentModule, 
    DashboardpageModule, 
  ],
})
export class AdminModule {}
