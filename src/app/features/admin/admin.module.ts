import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ComponentModule } from './components/component.module';
import { DashboardpageModule } from 'src/app/pages/admin/dashboard/dashboard-page.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, ComponentModule, DashboardpageModule],
})
export class AdminModule {}
