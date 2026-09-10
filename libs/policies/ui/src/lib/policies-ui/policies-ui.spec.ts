import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliciesUi } from './policies-ui';

describe('PoliciesUi', () => {
  let component: PoliciesUi;
  let fixture: ComponentFixture<PoliciesUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesUi],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliciesUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
