import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card3d',
  templateUrl: './card3d.component.html',
  styleUrls: ['./card3d.component.css']
})
export class Card3dComponent {
  @ViewChild('cardRef') cardRef!: ElementRef;
  cardStyles: any = {};

  setBoundingRect(event: MouseEvent) {
    const boundingRect = (event.target as HTMLElement).getBoundingClientRect();
    this.cardRef.nativeElement.style.setProperty('--bounding-left', `${boundingRect.left}px`);
    this.cardRef.nativeElement.style.setProperty('--bounding-top', `${boundingRect.top}px`);
  }

  rotateCard(event: MouseEvent) {
    const boundingLeft = parseFloat(this.cardRef.nativeElement.style.getPropertyValue('--bounding-left') || '0');
    const boundingTop = parseFloat(this.cardRef.nativeElement.style.getPropertyValue('--bounding-top') || '0');
    const x = event.clientX - boundingLeft;
    const y = event.clientY - boundingTop;
    const xPercentage = x / this.cardRef.nativeElement.clientWidth;
    const yPercentage = y / this.cardRef.nativeElement.clientHeight;
    const xRotation = (xPercentage - 0.5) * 40;
    const yRotation = (0.5 - yPercentage) * 40;

    this.cardStyles = {
      '--x-rotation': `${yRotation}deg`,
      '--y-rotation': `${xRotation}deg`,
      '--x': `${xPercentage * 100}%`,
      '--y': `${yPercentage * 100}%`,
    };
  }

  resetCardStyles() {
    this.cardStyles = {};
  }
}
