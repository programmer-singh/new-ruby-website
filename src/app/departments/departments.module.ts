import { BannerModule } from './../banner/banner.module';
import { DepartmentRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DepartmentsComponent,
    ],
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        BannerModule,
    ]
})
export class DepartmentsModule { }
