import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Phaser from "phaser-ce";

import { AppComponent } from './app.component';
import { SimplegameComponent } from './simplegame/simplegame.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplegameComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
