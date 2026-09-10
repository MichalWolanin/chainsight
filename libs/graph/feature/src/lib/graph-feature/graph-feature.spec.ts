import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphFeature } from './graph-feature';

describe('GraphFeature', () => {
  let component: GraphFeature;
  let fixture: ComponentFixture<GraphFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
