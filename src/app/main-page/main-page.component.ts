import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  goToCircularProgressBar() {
    window.location.href = 'cpb';
  }
  goToCircularProgressBarPureCss(){
    window.location.href = 'cpb-pure-css';
  }
  goTo3dCard(){
    window.location.href = 'card-3d';
  }
}
