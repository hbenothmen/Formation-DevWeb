import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S22Parent } from './s22-parent';

describe('S22Parent', () => {
  let component: S22Parent;
  let fixture: ComponentFixture<S22Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S22Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(S22Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
