import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestDetails } from './dest-details';

describe('DestDetails', () => {
  let component: DestDetails;
  let fixture: ComponentFixture<DestDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DestDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
