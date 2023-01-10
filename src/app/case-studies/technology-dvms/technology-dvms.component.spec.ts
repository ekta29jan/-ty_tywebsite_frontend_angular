import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDvmsComponent } from './technology-dvms.component';

describe('TechnologyDvmsComponent', () => {
  let component: TechnologyDvmsComponent;
  let fixture: ComponentFixture<TechnologyDvmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyDvmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyDvmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
