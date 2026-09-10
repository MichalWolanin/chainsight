import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsUi } from './projects-ui';

describe('ProjectsUi', () => {
  let component: ProjectsUi;
  let fixture: ComponentFixture<ProjectsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
