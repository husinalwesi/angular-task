import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeSectionComponent } from './main-home-section.component';

describe('MainHomeSectionComponent', () => {
  let component: MainHomeSectionComponent;
  let fixture: ComponentFixture<MainHomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
