import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDest } from './modifier-dest';

describe('ModifierDest', () => {
  let component: ModifierDest;
  let fixture: ComponentFixture<ModifierDest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierDest],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierDest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
