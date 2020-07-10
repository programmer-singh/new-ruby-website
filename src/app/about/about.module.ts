import { BannerModule } from './../banner/banner.module';

import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        AboutRoutingModule,
        CommonModule,
        BannerModule,
    ]
})
export class AboutModule { }
