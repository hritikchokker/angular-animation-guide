import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableAnimationsComponent } from './reusable-animations.component';

describe('ReusableAnimationsComponent', () => {
  let component: ReusableAnimationsComponent;
  let fixture: ComponentFixture<ReusableAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
