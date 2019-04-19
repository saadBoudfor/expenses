import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDisplayComponent } from './target-display.component';

describe('TargetDisplayerComponent', () => {
  let component: TargetDisplayComponent;
  let fixture: ComponentFixture<TargetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
