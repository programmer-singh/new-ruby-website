import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        GalleryComponent,
    ],
    exports: [
        GalleryComponent,
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule,
    ]
})
export class GalleryModule { }
