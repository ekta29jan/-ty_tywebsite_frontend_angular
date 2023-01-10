import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlewareIntegrationComponent } from './middleware-integration.component';

describe('MiddlewareIntegrationComponent', () => {
  let component: MiddlewareIntegrationComponent;
  let fixture: ComponentFixture<MiddlewareIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlewareIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlewareIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
