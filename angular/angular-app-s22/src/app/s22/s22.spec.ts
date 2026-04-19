import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S22 } from './s22';

describe('S22', () => {
  let component: S22;
  let fixture: ComponentFixture<S22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S22],
    }).compileComponents();

    fixture = TestBed.createComponent(S22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
