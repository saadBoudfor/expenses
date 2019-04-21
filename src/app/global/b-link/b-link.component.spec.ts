import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BLinkComponent } from './b-link.component';

describe('BLinkComponent', () => {
  let component: BLinkComponent;
  let fixture: ComponentFixture<BLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
