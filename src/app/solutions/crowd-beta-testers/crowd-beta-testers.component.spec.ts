import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdBetaTestersComponent } from './crowd-beta-testers.component';

describe('CrowdBetaTestersComponent', () => {
  let component: CrowdBetaTestersComponent;
  let fixture: ComponentFixture<CrowdBetaTestersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdBetaTestersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdBetaTestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
