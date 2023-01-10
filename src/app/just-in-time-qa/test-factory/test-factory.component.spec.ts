import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFactoryComponent } from './test-factory.component';

describe('TestFactoryComponent', () => {
  let component: TestFactoryComponent;
  let fixture: ComponentFixture<TestFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
