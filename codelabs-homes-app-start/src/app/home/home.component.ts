import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsTemplate } from '../projects-template';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    RouterModule
  ],
  template: `
    <main>
        <section class="header">
          <div id="name"> Irene Huebra Garcia </div>
          <div id="menu">
            <ul>
              <li><a routerLink="/home"> Portfolio </a></li>
              <li><a routerLink="/about"> About </a></li>
              <li><a> Resume </a></li>
            </ul>
          </div>
        </section>
        <section class="welcomeSection">
          <h1>Welcome!</h1>  
          <div class="imageCrop">
            <img src="/assets/Headshot.jpg" alt="Headshot of author">
          </div>
          <p> Little description of Portfolio... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </section>
        <h1 class="projectTitle"> Projects </h1>
        <section class="projects-container">
          <div *ngFor="let project of projectsTemplateList" class="card">
            <div class="card_inner">
              <div class="card_front">
                <img [src]="project?.photo" alt="{{ project.name }} project photo">
              </div>
              <div class="card_back">
                <h2 class="card_title"> {{project.name}}</h2>
                <p class="card_date">Date Started: {{ project.dateStarted }}</p>
                <p class="card__description"> {{project.description}} </p>
                <p *ngIf="project.linkToProject"><a [href]="project.linkToProject" target="_blank">Visit Project</a></p>
                <p><a [href]="project.linkToGithub" target="_blank">View Project GitHub</a></p>
              </div>
            </div>
          </div>
        </section>
        <section class="disclaimer"> 
          <div id="Contact">
            <h3>Contact Info:</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/irene-huebra/"> LinkedIn</a> </li>
              <li> Email: <a href="mailto:irene@huebra.es"> irene@huebra.es </a> </li>
              <li> Phone: +1 (317) 774-6651 </li>
            </ul>
          </div>
          <h3> To learn more about me please visit the <a routerLink="/about"> About </a> page!</h3>
        </section>
        <router-outlet></router-outlet>
      </main>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projectsTemplateList : ProjectsTemplate[] = [
    {
      name: "Good Morning",
      dateStarted: "May 2024",
      photo: "/assets/GoodMorningProjectSS.jpg",
      linkToProject: "https://goodmorningmom.000webhostapp.com/",
      linkToGithub: "https://github.com/ihuebrag/Daily-Good-Mornings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      name: "Purdue Supplier Diversity Management",
      dateStarted: "Aug 2022",
      photo: "/assets/PSDMProjectSC.jpeg",
      linkToProject: "https://purduesuppliermanagementdatabase.tiiny.site/",
      linkToGithub:"https://github.com/TheDataMine/f2022-s2023-purdue-supplier-management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      name: "The Marketplace",
      dateStarted: "Oct 2022",
      photo: "/assets/TheMarketplaceSS.png",
      linkToProject: "",
      linkToGithub:"https://github.com/ihuebrag/The-Marketplace/tree/main",
      description: "",
    },
  ];
  route: ActivatedRoute = inject(ActivatedRoute);
}
