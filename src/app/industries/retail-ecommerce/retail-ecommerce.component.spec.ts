import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailEcommerceComponent } from './retail-ecommerce.component';

describe('RetailEcommerceComponent', () => {
  let component: RetailEcommerceComponent;
  let fixture: ComponentFixture<RetailEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
