import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, ComponentModule],
})
export class AdminModule {}
