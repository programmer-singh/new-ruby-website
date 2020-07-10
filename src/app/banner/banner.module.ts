import { BannerComponent } from './banner.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        BannerComponent,
    ],
    exports: [
        BannerComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class BannerModule { }
