import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFeatureComponent } from './multi-feature.component';

describe('MultiFeatureComponent', () => {
  let component: MultiFeatureComponent;
  let fixture: ComponentFixture<MultiFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
