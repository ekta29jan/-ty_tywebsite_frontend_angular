import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotServicesComponent } from './iot-services.component';

describe('IotServicesComponent', () => {
  let component: IotServicesComponent;
  let fixture: ComponentFixture<IotServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
