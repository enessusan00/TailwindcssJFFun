import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-glitter',
  templateUrl: './glitter.component.html',
  styleUrls: ['./glitter.component.css'],
  animations: [
    trigger('fadeOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '100%', })),
      transition('* <=> void', [
        animate('0.5s ease-in-out')
      ])
    ]),
    trigger('spin', [
      state('void', style({ transform: 'rotate(100deg)' })),
      state('*', style({ transform: 'rotate(30deg)' })),
      transition('* <=> void', [
        animate('2s ease-in-out')
      ])
    ])
  ]
})
export class GlitterComponent {
  constructor(private router: Router) { }



  anime = new Array(100)
  animeCount = 0
  gotoLogin() {
    this.router.navigateByUrl('/login');
  }
  mynumber = 0
  // ana animasyion
  _count = 0;
  // yıldız animasyon
  _count2 = 0;
  // yıldız animasyon rotate
  state = 0
  ngOnDestroy(): void {
    clearInterval(this._count);
  }
  _count3 = 0;
  zigzag = []
  ngOnInit(): void {
    setInterval(() => {


      this.zigzag = this.createMatrixAndZigzagTraversal(10)
      this.zigzag = this.zigzag[this.animeCount]
      console.log(this.zigzag)
      this.animeCount++
      if (this.animeCount > 18) {
        this.animeCount = 0
      }
      this._count3++

    }, 300);
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log(randomNumber);


    setInterval(() => {
      // this.getDiagonalIndexes()

      this.mynumber++
      this._count = this.mynumber
      if (this.mynumber > 4) {
        this._count = 4
        this._count2++
        if (this._count2 > 2) {
          this._count2 = 2
          if (this.state === 1) {
            this.state = 0
            return;
          }
          this.state = 1
        }
      }
    }, 1000);

  }


  private _myVariable: string = ''; // Değişkeni tanımlayın

  get myVariable(): string {
    return this._myVariable; // Getter işlevi
  }

  set myVariable(value: string) {
    this._myVariable = value; // Setter işlevi
    // Değişkenin değeri değiştiğinde yapılacak işlemleri buraya ekleyin
    console.log('myVariable değeri değişti:', value);
  }

  createMatrixAndZigzagTraversal(size: number): number[] {
    // Matrisi oluşturma
    let matrix = [];
    let num = 0;
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(num++);
      }
      matrix.push(row);
    }

    // Zigzag diagonals
    let diagonals = [];
    for (let d = 0; d < 2 * size - 1; d++) {
      diagonals.push([]);
    }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let sum = i + j;
        if (sum % 2 === 0) {
          diagonals[sum].unshift(matrix[i][j]);
        } else {
          diagonals[sum].push(matrix[i][j]);
        }
      }
    }

    return diagonals;
  }

  isSpecialIndex(index: number): boolean {
    return this.zigzag.includes(index);
  }

}
