import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { DrawerMenuModule } from './drawer-menu/drawer-menu.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    DrawerMenuModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: Window, useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
