import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsTemplate } from './projects-template';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ProjectsComponent, CommonModule],
  template: `
  <main>
  <section class="header">
    <div id="name"> Irene Huebra Garcia </div>
    <div id="menu">
      <ul> 
        <li> Portfolio </li>
        <li> About </li>
        <li> Resume </li>
      </ul>
    </div>
  </section>
  <section class="welcomeSection">
    <h1>Welcome!</h1>  
    <p> Little description of Portfolio </p>
  </section>
  <h1> Projects </h1>
  <section class="projects-container">
    <div *ngFor="let project of projectsTemplateList" class="card">
      <div class="card_inner">
        <div class="card_front">
          <img [src]="project.photo" alt="{{ project.name }} website photo">
        </div>
        <div class="card_back">
          <h2 class="card_title"> {{project.name}}</h2>
          <p>Date Started: {{ project.dateStarted }}</p>
          <p class="card__description"> {{project.description}} </p>
          <p><a [href]="project.linkToProject" target="_blank">View Project</a></p>
          <p><a [href]="project.linkToGithub" target="_blank">View Code on GitHub</a></p>
        </div>
      </div>
    </div>
  </section>
  <section class="disclaimer"> 
    <h3> To learn more about me please visit the About page!</h3>
    <h3> To contact me please visit the Contact page!</h3>
  </section>
</main>

  `,
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
      linkToProject: "https://4bbf33fd-962e-499e-8cfd-00f53a65a5f9-00-3uln3y9igjt61.worf.replit.dev/",
      linkToGithub:"https://github.com/TheDataMine/f2022-s2023-purdue-supplier-management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];
}
