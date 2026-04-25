import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimerDestination } from './suprimer-destination';

describe('SuprimerDestination', () => {
  let component: SuprimerDestination;
  let fixture: ComponentFixture<SuprimerDestination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuprimerDestination],
    }).compileComponents();

    fixture = TestBed.createComponent(SuprimerDestination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
