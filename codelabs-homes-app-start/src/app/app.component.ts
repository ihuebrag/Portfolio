import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsTemplate } from './projects-template';
import { ProjectsComponent } from './projects/projects.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppModule } from './app.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ProjectsComponent,
    CommonModule,
    RouterModule,
    AboutComponent,
    RouterLink,
    RouterOutlet,
    //AppModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'portfolio';

  projectsTemplateList : ProjectsTemplate[] = [
    {
    name: "Good Morning",
    dateStarted: "May 2024",
    photo: "/assets/GoodMorningProjectSC.jpeg",
    linkToProject: "https://goodmorningmom.000webhostapp.com/",
    linkToGithub: "https://github.com/ihuebrag/Daily-Good-Mornings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      name: "Purdue Supplier Diversity Management",
      dateStarted: "August 2022",
      photo: "/assets/PSDMProjectSC.jpeg",
      linkToProject: "https://purduesuppliermanagementdatabase.tiiny.site/",
      linkToGithub:"https://github.com/TheDataMine/f2022-s2023-purdue-supplier-management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      name: "The Marketplace",
      dateStarted: "October 2022",
      photo: "",
      linkToProject: "",
      linkToGithub:"https://github.com/ihuebrag/The-Marketplace/tree/main",
      description: "",
    },
  ];
}
