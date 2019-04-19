import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B4LibsComponent } from './b4-libs.component';

describe('B4LibsComponent', () => {
  let component: B4LibsComponent;
  let fixture: ComponentFixture<B4LibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B4LibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B4LibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
