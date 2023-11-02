
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.css'],
})
export class CircularProgressBarComponent implements OnInit {
  // radius variable to store the radius of the progress bar
  circumference: number = 30 * 3.2 * Math.PI;
  // percent variable to store the percentage of the progress bar
  percent: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // increase function to increase the progress bar
  increase() {
    this.percent += 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }
  // decrease function to decrease the progress bar
  decrease() {
    this.percent -= 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
}
