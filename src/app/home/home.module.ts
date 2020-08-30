import { CommonModule } from '@angular/common';
import { FooterModule } from './../footer/footer.module';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponentRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        HomeComponentRoutingModule,
        CarouselModule,
        MatIconModule,
        FooterModule,
        ReactiveFormsModule,
        CommonModule,
        AnimateOnScrollModule.forRoot()
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeComponentModule { }
