import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIMPSComponent } from './transaction-imps.component';

describe('TransactionIMPSComponent', () => {
  let component: TransactionIMPSComponent;
  let fixture: ComponentFixture<TransactionIMPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionIMPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionIMPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
