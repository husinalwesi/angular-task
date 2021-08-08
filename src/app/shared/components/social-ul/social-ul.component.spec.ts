import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialUlComponent } from './social-ul.component';

describe('SocialUlComponent', () => {
  let component: SocialUlComponent;
  let fixture: ComponentFixture<SocialUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialUlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
