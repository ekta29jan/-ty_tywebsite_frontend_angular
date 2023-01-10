import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSolutionComponent } from './cloud-solution.component';

describe('CloudSolutionComponent', () => {
  let component: CloudSolutionComponent;
  let fixture: ComponentFixture<CloudSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
