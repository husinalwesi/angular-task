import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPointsComponent } from './animated-points.component';

describe('AnimatedPointsComponent', () => {
  let component: AnimatedPointsComponent;
  let fixture: ComponentFixture<AnimatedPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
