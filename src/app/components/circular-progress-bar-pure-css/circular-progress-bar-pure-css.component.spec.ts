import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularProgressBarPureCssComponent } from './circular-progress-bar-pure-css.component';

describe('CircularProgressBarPureCssComponent', () => {
  let component: CircularProgressBarPureCssComponent;
  let fixture: ComponentFixture<CircularProgressBarPureCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularProgressBarPureCssComponent]
    });
    fixture = TestBed.createComponent(CircularProgressBarPureCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
