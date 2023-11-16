import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGlitterComponent } from './random-glitter.component';

describe('RandomGlitterComponent', () => {
  let component: RandomGlitterComponent;
  let fixture: ComponentFixture<RandomGlitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomGlitterComponent]
    });
    fixture = TestBed.createComponent(RandomGlitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
