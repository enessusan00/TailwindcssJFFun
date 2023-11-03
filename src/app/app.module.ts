import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Router } from '@angular/router';
import { CircularProgressBarPureCssComponent } from './components/circular-progress-bar-pure-css/circular-progress-bar-pure-css.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularProgressBarPureCssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
