import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTestLifeCycleComponent } from './full-test-life-cycle.component';

describe('FullTestLifeCycleComponent', () => {
  let component: FullTestLifeCycleComponent;
  let fixture: ComponentFixture<FullTestLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTestLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTestLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
