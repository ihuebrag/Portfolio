import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsTemplate } from '../projects-template';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    RouterModule
  ],
  encapsulation: ViewEncapsulation.None, // this will allow innerHTML to apply the CSS <- used in project descriptions
  template: `
    <main>
        <section class="header">
          <div id="name"> Irene Huebra Garcia </div>
          <div id="menu">
            <ul>
              <li><a routerLink="/home"> PORTFOLIO </a></li>
              <li><a routerLink="/about"> ABOUT </a></li>
              <li><a href="https://drive.google.com/file/d/1bEWn208EJUBmViB4Ti3niKmRocy-ltqn/view?usp=sharing" target="_blank"> RESUME </a></li>
            </ul>
          </div>
        </section>
        <section class="welcomeSection">
          <h1>WELCOME!</h1>  
          <p>
          <span style="color:#32cbf1"> $ Welcome to my portfolio! </span><br> 
          <span style="color:#32cbf1"> $ </span> I'm <span style="color:#32cbf1">[Irene]</span>, a passionate computer science student specializing in <span style="color:#32cbf1">[Software Engineering]</span>.
          <br> <span style="color:#32cbf1"> $ </span> Here, you'll find a showcase of my <span style="color:#32cbf1">["projects", "skills", and "experiences"]</span> that highlight my journey in the tech world.
          <br> <span style="color:#32cbf1"> $ </span> Let's connect and see how we can build the future together!
          <br> <span style="color:#32cbf1"> $ </span> 
          </p>
        </section>

        <section class="projectsHeader">
          <h1 class="projectTitle"> PROJECTS </h1>
        </section>
        <section class="projects-container">
          <div *ngFor="let project of projectsTemplateList" class="card">
              <div class="card_content">
                <div *ngIf="project.id % 2 !== 0" class="card_image">
                  <img [src]="project?.photo" alt="{{ project.name }} project photo">
                </div>
                <div class="card_info" style="align-items: left;">
                  <img>
                  <h2 class="card_title"> {{project.name}}</h2>
                  <p class="card_date">Date Started: {{ project.dateStarted }}</p>
                  <p class="card__description" [innerHTML]="project.description"></p>
                  <div class="bottomPanel"> 
                    <div class="skillImg">
                      <img *ngFor="let skill of project.skills" [src]="'/assets/skills/' + skill.toLowerCase() + '.png'" [alt]="skill">
                    </div>
                    <div class="links">
                      <p *ngIf="project.linkToProject"><a [href]="project.linkToProject" target="_blank">Visit Project</a></p>
                      <p><a [href]="project.linkToGithub" target="_blank">View Project GitHub</a></p>
                    </div>
                  </div>
                </div>
                <div *ngIf="project.id % 2 == 0" class="card_image">
                  <img [src]="project?.photo" alt="{{ project.name }} project photo">
                </div>
            </div>
          </div>
        </section>

        <section class="disclaimer"> 
          <div id="Contact">
            <h3> <span style="color:#32cbf1"> $ </span> Contact Info:</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/irene-huebra/"> <span style="color:#32cbf1"> $ </span> LinkedIn</a> </li>
              <li> <span style="color:#32cbf1"> $ </span> Email: <a href="mailto:irene@huebra.es"> irene@huebra.es </a> </li>
              <li> <span style="color:#32cbf1"> $ </span> Phone: +1 (317) 774-6651 </li>
            </ul>
          </div>
          <h3> <span style="color:#32cbf1"> $ </span> To learn more about me please visit the <a routerLink="/about"> [About] </a> page!</h3>
        </section>
        <router-outlet></router-outlet>
      </main>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projectsTemplateList : ProjectsTemplate[] = [
    {
      id: 1,
      name: "Good Morning",
      dateStarted: "May 2024",
      photo: "/assets/GoodMorningProjectSS.jpg",
      linkToProject: "https://goodmorningmom.000webhostapp.com/",
      linkToGithub: "https://github.com/ihuebrag/Daily-Good-Mornings",
      description: `
      <span class="highlight"> Description </span> Website that generates a new image to wish a good morning to people. Also has a Daily Quote generator and library with a collection of images.<br>
      <span class="highlight"> Methodology </span><br>
      + <span class="highlight">CSS, HTML, JavaScript</span>: For front-end development.<br>
      + <span class="highlight">PHP</span>: For backend processing and automation<br>
      <span class="highlight"> Results </span> A functional website users can interact with to send a good morning message to others.<br>
      `,
      skills: ["CSS", "HTML", "JavaScript"],
    },
    {
      id: 2,
      name: "Purdue Supplier Diversity Management",
      dateStarted: "Aug 2022",
      photo: "/assets/PSDMProjectSC.jpeg",
      linkToProject: "https://purduesuppliermanagementdatabase.tiiny.site/",
      linkToGithub:"https://github.com/TheDataMine/f2022-s2023-purdue-supplier-management",
      description: `
<span class="highlight"> Description </span>  Website to provide resources and guidelines for suppliers looking to work with Purdue University.<br>
<span class="highlight"> Methodology </span><br>
  + <span class="highlight">Agile teamwork</span>: Ensured rapid and flexible development.<br>
  + <span class="highlight">CSS, HTML, JavaScript</span>: For front-end development.<br>
  + <span class="highlight">SQL</span>: For database management.<br>
  + <span class="highlight">Python</span>: For backend processing and automation.<br>
<span class="highlight"> Results </span> Improved support for diverse supplier partnerships and data visualization.<br>
      `,
      skills: ["CSS", "HTML", "JavaScript", "Tableau"],
    },
    {
      id: 3,
      name: "The Marketplace",
      dateStarted: "Oct 2022",
      photo: "/assets/TheMarketplaceSS.png",
      linkToProject: "",
      linkToGithub:"https://github.com/ihuebrag/The-Marketplace/tree/main",
      description:  `
<span class="highlight"> Description </span> A GUI in Java that makes use of servers and clients to create a marketplace for users that can use the seller or customer interfaces to either sell or buy goods respectively.<br>
<span class="highlight"> Methodology </span><br>
  + <span class="highlight">Teamwork</span>: 2 Back-End Developers & 2 Front-End Developers<br>
  + <span class="highlight">Java</span>: For Full-Stack Development<br>
        `,
      skills: ["Java"],
    },
  ];
  route: ActivatedRoute = inject(ActivatedRoute);
}
