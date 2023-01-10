import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOptimizeComponent } from './test-optimize.component';

describe('TestOptimizeComponent', () => {
  let component: TestOptimizeComponent;
  let fixture: ComponentFixture<TestOptimizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOptimizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOptimizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
