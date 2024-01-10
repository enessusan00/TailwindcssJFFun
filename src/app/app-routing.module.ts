import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CircularProgressBarPureCssComponent } from './components/circular-progress-bar-pure-css/circular-progress-bar-pure-css.component';
import { Card3dComponent } from './components/card3d/card3d.component';
import { CursorAnimationComponent } from './components/cursor-animation/cursor-animation.component';
import { GlitterComponent } from './components/glitter/glitter.component';
import { RandomGlitterComponent } from './components/random-glitter/random-glitter.component';
import { GraphLineComponent } from './components/graph-line/graph-line.component';
import { CoolGridComponent } from './components/cool-grid/cool-grid.component';

const routes: Routes = [

  { path: '', component: MainPageComponent },
  { path: 'cpb', component: CircularProgressBarComponent },
  { path: 'cpb-pure-css', component: CircularProgressBarPureCssComponent },
  { path: 'card-3d', component: Card3dComponent},
  { path: 'cursor-animation', component: CursorAnimationComponent},
  { path: 'glitter', component: GlitterComponent},
  { path: 'random-glitter', component: RandomGlitterComponent},
  { path: 'graph-line', component: GraphLineComponent},
  { path: 'cool-grid', component: CoolGridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
