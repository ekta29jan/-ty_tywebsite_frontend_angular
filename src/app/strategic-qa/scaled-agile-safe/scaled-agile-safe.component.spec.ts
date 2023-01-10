import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaledAgileSafeComponent } from './scaled-agile-safe.component';

describe('ScaledAgileSafeComponent', () => {
  let component: ScaledAgileSafeComponent;
  let fixture: ComponentFixture<ScaledAgileSafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaledAgileSafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaledAgileSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
