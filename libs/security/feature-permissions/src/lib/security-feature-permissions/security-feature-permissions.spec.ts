import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityFeaturePermissions } from './security-feature-permissions';

describe('SecurityFeaturePermissions', () => {
  let component: SecurityFeaturePermissions;
  let fixture: ComponentFixture<SecurityFeaturePermissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFeaturePermissions],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityFeaturePermissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
