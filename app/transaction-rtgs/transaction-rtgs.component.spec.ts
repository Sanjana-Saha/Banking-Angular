import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRTGSComponent } from './transaction-rtgs.component';

describe('TransactionRTGSComponent', () => {
  let component: TransactionRTGSComponent;
  let fixture: ComponentFixture<TransactionRTGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionRTGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRTGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
