import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerUser } from './supprimer-user';

describe('SupprimerUser', () => {
  let component: SupprimerUser;
  let fixture: ComponentFixture<SupprimerUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerUser],
    }).compileComponents();

    fixture = TestBed.createComponent(SupprimerUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
