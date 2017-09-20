import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SimplegameComponent } from './simplegame/simplegame.component';
import { ScoreService } from './services/score.service';
import * as Phaser from "phaser-ce";


@NgModule({
  declarations: [
    AppComponent,
    SimplegameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
