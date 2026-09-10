import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsFeature } from './projects-feature';

describe('ProjectsFeature', () => {
  let component: ProjectsFeature;
  let fixture: ComponentFixture<ProjectsFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
