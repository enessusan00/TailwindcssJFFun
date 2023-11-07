import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-cursor-animation',
  templateUrl: './cursor-animation.component.html',
  styleUrls: ['./cursor-animation.component.css']
})
export class CursorAnimationComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  on = false;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    this.mouseX = event.clientX - 15;
    this.mouseY = event.clientY - 15;
    setTimeout(() => {
      if (this.mouseX == event.clientX - 15 &&
        this.mouseY == event.clientY - 15) {
        this.on = true;
      } else {
        this.on = false;
      }
    }, 10);
  }
  bigg = 0;
  showBigg = false;
  bigger() {
    this.bigg++;
    if (this.bigg > 5) {
      this.showBigg = true;
      this.bigg = 0;
    }else{
      this.showBigg = false;
    }
  }
}
