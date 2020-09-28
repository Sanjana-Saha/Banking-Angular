import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNEFTComponent } from './transaction-neft.component';

describe('TransactionNEFTComponent', () => {
  let component: TransactionNEFTComponent;
  let fixture: ComponentFixture<TransactionNEFTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNEFTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNEFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
