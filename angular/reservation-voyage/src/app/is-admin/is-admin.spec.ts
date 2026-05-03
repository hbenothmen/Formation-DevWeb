import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsAdmin } from './is-admin';

describe('IsAdmin', () => {
  let component: IsAdmin;
  let fixture: ComponentFixture<IsAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(IsAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
