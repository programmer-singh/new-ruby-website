import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanelmentsComponent } from './empanelments.component';

describe('EmpanelmentsComponent', () => {
  let component: EmpanelmentsComponent;
  let fixture: ComponentFixture<EmpanelmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpanelmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanelmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
