import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphUi } from './graph-ui';

describe('GraphUi', () => {
  let component: GraphUi;
  let fixture: ComponentFixture<GraphUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphUi],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
