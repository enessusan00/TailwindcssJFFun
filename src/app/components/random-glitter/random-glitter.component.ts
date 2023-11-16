import { Component } from '@angular/core';

@Component({
  selector: 'app-random-glitter',
  templateUrl: './random-glitter.component.html',
  styleUrls: ['./random-glitter.component.css']
})
export class RandomGlitterComponent {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomize();
      console.log(this.randomArray)
    }
      , 1500);
  }
  dotArray: number[] = new Array(144).fill(-1);
  randomArray: number[] = new Array(48).fill(0);

  randomize() {
    this.randomArray.forEach((dot, index) => {
      this.randomArray[index] = Math.floor(Math.random() * 145);
    });
  }
  setOpacity(dot: number) {
    return this.randomArray.includes(dot);
  }

  setRandomColor(dot: number) {
    const element = document.getElementById(`${dot}`);
    if (element) {
      if (this.setOpacity(dot)) {
        const randomColor = `rgb(0, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        element.style.background = randomColor;
      }
    }
  }

}
