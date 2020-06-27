import { CommonModule } from '@angular/common';
import { DrawerMenuComponent } from './drawer-menu.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DrawerMenuComponent,
    ],
    exports: [
        DrawerMenuComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class DrawerMenuModule { }
