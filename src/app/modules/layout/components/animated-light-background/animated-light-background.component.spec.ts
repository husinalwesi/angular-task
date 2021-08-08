import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLightBackgroundComponent } from './animated-light-background.component';

describe('AnimatedLightBackgroundComponent', () => {
  let component: AnimatedLightBackgroundComponent;
  let fixture: ComponentFixture<AnimatedLightBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedLightBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedLightBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
