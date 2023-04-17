import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SlideshowComponent,
    FooterBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
