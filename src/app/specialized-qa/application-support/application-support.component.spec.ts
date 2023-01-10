import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSupportComponent } from './application-support.component';

describe('ApplicationSupportComponent', () => {
  let component: ApplicationSupportComponent;
  let fixture: ComponentFixture<ApplicationSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
