import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesForceComponent } from './sales-force.component';

describe('SalesForceComponent', () => {
  let component: SalesForceComponent;
  let fixture: ComponentFixture<SalesForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
