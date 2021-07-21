import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHolderFormComponent } from './account-holder-form.component';

describe('AccountHolderFormComponent', () => {
  let component: AccountHolderFormComponent;
  let fixture: ComponentFixture<AccountHolderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHolderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHolderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
