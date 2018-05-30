import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCallsComponent } from './local-calls.component';

describe('LocalCallsComponent', () => {
  let component: LocalCallsComponent;
  let fixture: ComponentFixture<LocalCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
