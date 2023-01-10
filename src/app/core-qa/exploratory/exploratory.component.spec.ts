import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploratoryComponent } from './exploratory.component';

describe('ExploratoryComponent', () => {
  let component: ExploratoryComponent;
  let fixture: ComponentFixture<ExploratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
