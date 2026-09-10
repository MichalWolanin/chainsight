import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliciesFeature } from './policies-feature';

describe('PoliciesFeature', () => {
  let component: PoliciesFeature;
  let fixture: ComponentFixture<PoliciesFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliciesFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
