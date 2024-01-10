import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLineComponent } from './graph-line.component';

describe('GraphLineComponent', () => {
  let component: GraphLineComponent;
  let fixture: ComponentFixture<GraphLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphLineComponent]
    });
    fixture = TestBed.createComponent(GraphLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
