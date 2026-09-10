import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindingsDataAccess } from './findings-data-access';

describe('FindingsDataAccess', () => {
  let component: FindingsDataAccess;
  let fixture: ComponentFixture<FindingsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindingsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(FindingsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
