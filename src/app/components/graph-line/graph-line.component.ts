import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-graph-line',
  templateUrl: './graph-line.component.html',
  styleUrls: ['./graph-line.component.css']
})
export class GraphLineComponent {
  constructor(private renderer: Renderer2) { }

  counter = 0
  ngOnInit(): void {
    setInterval(() => {
      this.updateChart1();
      if (this.counter > 1) {
        this.updateChart2();
      } if (this.counter > 2) {
        this.updateChart3();
      }
      if (this.counter > 3) {
        this.hideAll();

      } if (this.counter > 5) {
        this.resetAll();
      }
    }, 1500);

  }

  updateChart1() {
    const line1 = document.getElementById('line1');
    const line4 = document.getElementById('line4');

    if (line1) {
      line1.style.opacity = `100`;
      line1.style.height = `1000px`;
    }

    if (line4) {
      line4.style.opacity = `100`;
      line4.style.height = `800px`;
    }
    this.counter++;
  }



  updateChart2() {
    const line2 = document.getElementById('line2');
    const line5 = document.getElementById('line5');
    if (line2) {
      line2.style.opacity = `100`;
      line2.style.height = `500px`;
    }
    if (line5) {
      line5.style.opacity = `100`;
      line5.style.height = `300px`;
    }
  }
  updateChart3() {
    const line3 = document.getElementById('line3');
    const line6 = document.getElementById('line6');

    if (line3) {

      line3.style.opacity = `100`;
      line3.style.height = `2000px`;
    }

    if (line6) {

      line6.style.opacity = `100`;
      line6.style.height = `2000px`;
    }
  }
  hideAll() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
    const line5 = document.getElementById('line5');
    const line6 = document.getElementById('line6');

    if (line1) {
      line1.style.opacity = `0`;
    }
    if (line2) {
      line2.style.opacity = `0`;
    }
    if (line3) {
      line3.style.opacity = `0`;
    }

    if (line4) {
      line4.style.opacity = `0`;
    }

    if (line5) {
      line5.style.opacity = `0`;
    }

    if (line6) {
      line6.style.opacity = `0`;
    }
  }
  resetAll() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
    const line5 = document.getElementById('line5');
    const line6 = document.getElementById('line6');

    if (line1) {
      // line1.style.opacity = `0`;
      line1.style.height = `0px`;
    }
    if (line2) {
      // line2.style.opacity = `0`;
      line2.style.height = `0px`;
    }
    if (line3) {
      // line3.style.opacity = `0`;
      line3.style.height = `0px`;
    }
    if (line4) {
      // line3.style.opacity = `0`;
      line4.style.height = `0px`;
    } if (line5) {
      // line3.style.opacity = `0`;
      line5.style.height = `0px`;
    } if (line6) {
      // line3.style.opacity = `0`;
      line3.style.height = `0px`;
    }


    this.counter = 0;
  }


}
