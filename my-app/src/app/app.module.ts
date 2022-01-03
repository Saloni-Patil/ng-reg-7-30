import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // all components goes here
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
