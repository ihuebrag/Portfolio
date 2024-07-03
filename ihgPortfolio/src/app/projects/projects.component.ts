import { Component, Input } from '@angular/core';
import { ProjectsTemplate } from '../projects-template';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects!: ProjectsTemplate;
}
