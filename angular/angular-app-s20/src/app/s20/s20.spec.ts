import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S20 } from './s20';

describe('S20', () => {
  let component: S20;
  let fixture: ComponentFixture<S20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S20],
    }).compileComponents();

    fixture = TestBed.createComponent(S20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
