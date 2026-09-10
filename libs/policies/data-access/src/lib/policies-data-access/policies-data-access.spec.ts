import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliciesDataAccess } from './policies-data-access';

describe('PoliciesDataAccess', () => {
  let component: PoliciesDataAccess;
  let fixture: ComponentFixture<PoliciesDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliciesDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
