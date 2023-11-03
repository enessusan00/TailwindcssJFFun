import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CircularProgressBarPureCssComponent } from './components/circular-progress-bar-pure-css/circular-progress-bar-pure-css.component';

const routes: Routes = [

  { path: '', component: MainPageComponent },
  { path: 'cpb', component: CircularProgressBarComponent },
  { path: 'cpb-pure-css', component: CircularProgressBarPureCssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
