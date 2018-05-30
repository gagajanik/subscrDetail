import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideCallsComponent } from './inside-calls.component';

describe('InsideCallsComponent', () => {
  let component: InsideCallsComponent;
  let fixture: ComponentFixture<InsideCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
