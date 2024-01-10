import { Component } from '@angular/core';

@Component({
  selector: 'app-cool-grid',
  templateUrl: './cool-grid.component.html',
  styleUrls: ['./cool-grid.component.css']
})
export class CoolGridComponent {
  moove = false;
  move(){
    this.moove = !this.moove;
  }
}
