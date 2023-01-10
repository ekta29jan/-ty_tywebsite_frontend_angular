import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoeComponent } from './tcoe.component';

describe('TcoeComponent', () => {
  let component: TcoeComponent;
  let fixture: ComponentFixture<TcoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
