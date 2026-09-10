import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsDataAccess } from './projects-data-access';

describe('ProjectsDataAccess', () => {
  let component: ProjectsDataAccess;
  let fixture: ComponentFixture<ProjectsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
