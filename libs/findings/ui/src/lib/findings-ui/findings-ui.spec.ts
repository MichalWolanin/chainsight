import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindingsUi } from './findings-ui';

describe('FindingsUi', () => {
  let component: FindingsUi;
  let fixture: ComponentFixture<FindingsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindingsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(FindingsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
