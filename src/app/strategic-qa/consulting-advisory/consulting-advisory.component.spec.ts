import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingAdvisoryComponent } from './consulting-advisory.component';

describe('ConsultingAdvisoryComponent', () => {
  let component: ConsultingAdvisoryComponent;
  let fixture: ComponentFixture<ConsultingAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
