import { EmpanelmentsComponent } from './empanelments.component';
import { BannerModule } from './../banner/banner.module';
import { EmpanelmentsRoutingModule } from './empanelments-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        EmpanelmentsComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        BannerModule,
        EmpanelmentsRoutingModule
    ]
})
export class EmpanelmentsModule { }
