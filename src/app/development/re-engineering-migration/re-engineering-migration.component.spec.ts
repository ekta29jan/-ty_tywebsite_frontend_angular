import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEngineeringMigrationComponent } from './re-engineering-migration.component';

describe('ReEngineeringMigrationComponent', () => {
  let component: ReEngineeringMigrationComponent;
  let fixture: ComponentFixture<ReEngineeringMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReEngineeringMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEngineeringMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
