import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmentsComponent } from './accountments.component';

describe('AccountmentsComponent', () => {
  let component: AccountmentsComponent;
  let fixture: ComponentFixture<AccountmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
