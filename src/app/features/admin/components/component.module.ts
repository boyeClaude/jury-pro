import { NgModule } from '@angular/core';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

import { SideBarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';

@NgModule({
    imports: [],
    exports: [SideBarComponent, TableComponent,MobileNavigationComponent],
    declarations: [SideBarComponent, TableComponent, MobileNavigationComponent],
    providers: [],
})
export class ComponentModule { }
