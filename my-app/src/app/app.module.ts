import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OffersPipe } from './offers.pipe';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BannerThreeComponent } from './banner-three/banner-three.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import { BannerOneComponent } from './banner-one/banner-one.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { MyDriDirective } from './my-dri.directive';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, OffersPipe, NavComponent, FooterComponent, BannerThreeComponent, BannerTwoComponent, BannerOneComponent, ContactUsComponent, ProductsComponent, MyDriDirective, MobileComponent, LaptopComponent, BookComponent], // all components goes here
  imports: [BrowserModule], // browserModule: to exec. and render component
  bootstrap: [AppComponent], // UI: root / entry component
})
export class AppModule {}

/*

UI = HTML + CSS + TS   [ BrowserModule ] -> Output

script.js
--------------
import  abc
import  xyz.css
import  xyz.html

script.ts
--------------
import  abc.js
import  xyz.css
import  xyz.html
import  app.module

*/
