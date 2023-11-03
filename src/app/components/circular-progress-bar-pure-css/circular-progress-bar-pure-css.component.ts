import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar-pure-css',
  templateUrl: './circular-progress-bar-pure-css.component.html',
  styleUrls: ['./circular-progress-bar-pure-css.component.css']
})
export class CircularProgressBarPureCssComponent implements OnInit {
  ngOnInit(): void {
    this.value = 0
    const circle = document.querySelector('.circle') as HTMLElement;
    const bg = document.querySelector('.bg') as HTMLElement;
    circle.style.setProperty('--progress', this.value.toString());
    bg.style.setProperty('background', `   background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red)
      `);
  }
  value = 0
  increase() {
    const circle = document.querySelector('.circle') as HTMLElement;
    const bg = document.querySelector('.bg') as HTMLElement;
    this.value += 5;
    circle.style.setProperty('--progress', this.value.toString());
    bg.style.setProperty('background', `   background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red)
    `);
    if (this.value > 50) {
      this.value = 50
    }
  }
  decrease() {
    const circle = document.querySelector('.circle') as HTMLElement;
    const bg = document.querySelector('.bg') as HTMLElement;
    this.value -= 5;
    circle.style.setProperty('--progress', this.value.toString());
    bg.style.setProperty('background', `   background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red)
    `);
    if (this.value < 0) {
      this.value = 0
    }
  }
}
