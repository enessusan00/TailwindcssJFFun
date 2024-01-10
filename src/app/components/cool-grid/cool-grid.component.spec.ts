import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolGridComponent } from './cool-grid.component';

describe('CoolGridComponent', () => {
  let component: CoolGridComponent;
  let fixture: ComponentFixture<CoolGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolGridComponent]
    });
    fixture = TestBed.createComponent(CoolGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
