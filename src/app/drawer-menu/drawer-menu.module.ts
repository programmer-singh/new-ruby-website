import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DrawerMenuComponent } from './drawer-menu.component';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        DrawerMenuComponent,
    ],
    exports: [
        DrawerMenuComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        HttpClientModule,
        RouterModule,
    ]
})
export class DrawerMenuModule { }
