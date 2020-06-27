import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponentRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
    imports: [
        HomeComponentRoutingModule,
        CarouselModule,
        MatIconModule,
        AnimateOnScrollModule.forRoot()
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeComponentModule { }
