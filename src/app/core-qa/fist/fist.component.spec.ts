import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistComponent } from './fist.component';

describe('FistComponent', () => {
  let component: FistComponent;
  let fixture: ComponentFixture<FistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
