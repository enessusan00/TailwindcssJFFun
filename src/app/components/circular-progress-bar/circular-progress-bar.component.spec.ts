import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularProgressBarComponent } from './circular-progress-bar.component';

describe('CircularProgressBarComponent', () => {
  let component: CircularProgressBarComponent;
  let fixture: ComponentFixture<CircularProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularProgressBarComponent]
    });
    fixture = TestBed.createComponent(CircularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
