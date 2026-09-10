import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityDataAccessAuth } from './security-data-access-auth';

describe('SecurityDataAccessAuth', () => {
  let component: SecurityDataAccessAuth;
  let fixture: ComponentFixture<SecurityDataAccessAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityDataAccessAuth],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityDataAccessAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
