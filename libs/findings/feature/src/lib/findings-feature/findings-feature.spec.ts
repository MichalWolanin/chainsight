import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindingsFeature } from './findings-feature';

describe('FindingsFeature', () => {
  let component: FindingsFeature;
  let fixture: ComponentFixture<FindingsFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindingsFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(FindingsFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
