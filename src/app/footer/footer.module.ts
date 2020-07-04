import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        FooterComponent,
    ],
    exports: [
        FooterComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        HttpClientModule
    ]
})
export class FooterModule { }
