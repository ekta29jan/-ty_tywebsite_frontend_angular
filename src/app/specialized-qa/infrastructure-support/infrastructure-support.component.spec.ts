import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureSupportComponent } from './infrastructure-support.component';

describe('InfrastructureSupportComponent', () => {
  let component: InfrastructureSupportComponent;
  let fixture: ComponentFixture<InfrastructureSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
