import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Router } from '@angular/router';
import { CircularProgressBarPureCssComponent } from './components/circular-progress-bar-pure-css/circular-progress-bar-pure-css.component';
import { Card3dComponent } from './components/card3d/card3d.component';
import { CursorAnimationComponent } from './components/cursor-animation/cursor-animation.component';
import { GlitterComponent } from './components/glitter/glitter.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomGlitterComponent } from './components/random-glitter/random-glitter.component';
import { GraphLineComponent } from './components/graph-line/graph-line.component';
import { CoolGridComponent } from './components/cool-grid/cool-grid.component';
@NgModule({
  declarations: [
    AppComponent,
    CircularProgressBarPureCssComponent,
    Card3dComponent,
    CursorAnimationComponent,
    GlitterComponent,
    RandomGlitterComponent,
    GraphLineComponent,
    CoolGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
