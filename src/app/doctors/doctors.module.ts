import { DoctorsComponent } from './doctors.component';
import { BannerModule } from './../banner/banner.module';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DoctorsComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        DoctorsRoutingModule,
        BannerModule,
    ]
})
export class DoctorsModule { }
