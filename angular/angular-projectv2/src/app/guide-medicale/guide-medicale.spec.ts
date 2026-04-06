import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideMedicale } from './guide-medicale';

describe('GuideMedicale', () => {
  let component: GuideMedicale;
  let fixture: ComponentFixture<GuideMedicale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideMedicale],
    }).compileComponents();

    fixture = TestBed.createComponent(GuideMedicale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
