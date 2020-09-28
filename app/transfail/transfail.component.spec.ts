import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfailComponent } from './transfail.component';

describe('TransfailComponent', () => {
  let component: TransfailComponent;
  let fixture: ComponentFixture<TransfailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
