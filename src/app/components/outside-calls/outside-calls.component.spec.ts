import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideCallsComponent } from './outside-calls.component';

describe('OutsideCallsComponent', () => {
  let component: OutsideCallsComponent;
  let fixture: ComponentFixture<OutsideCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
