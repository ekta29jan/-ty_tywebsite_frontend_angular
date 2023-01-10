import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceMachinelearningComponent } from './datascience-machinelearning.component';

describe('DatascienceMachinelearningComponent', () => {
  let component: DatascienceMachinelearningComponent;
  let fixture: ComponentFixture<DatascienceMachinelearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatascienceMachinelearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatascienceMachinelearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
