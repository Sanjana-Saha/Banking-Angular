import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDecisionComponent } from './admin-decision.component';

describe('AdminDecisionComponent', () => {
  let component: AdminDecisionComponent;
  let fixture: ComponentFixture<AdminDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
