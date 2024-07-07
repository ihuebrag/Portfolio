import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsTemplate } from '../projects-template';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ViewEncapsulation  } from '@angular/core';
import { FloatingMenuComponent } from '../floating-menu/floating-menu.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    RouterModule,
    FloatingMenuComponent,
    FormsModule
  ],
  encapsulation: ViewEncapsulation.None, // this will allow innerHTML to apply the CSS <- used in project descriptions
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  projectsTemplateList : ProjectsTemplate[] = [
    {
      id: 1,
      name: "Good Morning",
      dateStarted: "May 2024",
      photo: "/assets/GoodMorningProjectSS.jpg",
      linkToProject: "https://dailygoodmorning.web.app",
      linkToGithub: "https://github.com/ihuebrag/Daily-Good-Mornings",
      description: `
      <span class="highlight"> $ Description: </span> Website that generates a new image to wish a good morning to others. Also has a Daily Quote generator and library with a collection of images.<br>
      <span class="highlight"> $ Skills: </span><br>
      + <span class="highlight">[CSS, HTML]</span> For front-end development.<br>
      + <span class="highlight">[PHP, JavaScript]</span> For backend processing and automation.<br>
      <span class="highlight"> $ Results: </span> A functional website users can interact with to send a good morning message to others.<br>
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
<span class="highlight"> $ Description: </span>  Website to provide resources and guidelines for suppliers looking to work with Purdue University.<br>
<span class="highlight"> $ Skills: </span><br>
  + <span class="highlight">[Agile teamwork]</span> Ensured rapid and flexible development.<br>
  + <span class="highlight">[CSS, HTML, JavaScript]</span> For front-end development.<br>
  + <span class="highlight">[SQL]</span> For database management.<br>
  + <span class="highlight">[Python]</span> For backend processing and automation.<br>
<span class="highlight"> $ Results: </span> Improved support for diverse supplier partnerships and data visualization.<br>
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
<span class="highlight"> $ Description: </span> A GUI in Java that makes use of servers and clients to create a marketplace for users that can use the seller or customer interfaces to either sell or buy goods respectively.<br>
<span class="highlight"> $ Skills: </span><br>
  + <span class="highlight">[Teamwork]</span> 2 Back-End Developers & 2 Front-End Developers.<br>
  + <span class="highlight">[Java]</span> For Full-Stack Development.<br>
        `,
      skills: ["Java"],
    },
  ];


  ngAfterViewInit(): void {
    // Initialize particlesJS after view is initialized
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  


  @ViewChild('projectsHeader') projectsHeader!: ElementRef; //this allows to scroll down

  constructor(private router: Router) {} // this allows between page navigation

  onSubmit(form: any) {
    const section = form.value.section.trim().toLowerCase();
    switch (section) {
      case 'cd projects':
        this.scrollToSection(this.projectsHeader);
        break;
      case 'cd about':
        this.router.navigate(['/about']);
        break;
      case 'cd resume':
        window.open('https://drive.google.com/file/d/1Z1jLdTRUWRNvrHsUJ-0DNwoca-8bHvN-/view?usp=sharing', '_blank');
        break;
      case 'cd github':
        window.open('https://github.com/ihuebrag', '_blank');
        break;
      case 'cd linkedin':
        window.open('https://www.linkedin.com/in/irene-huebra/', '_blank');
        break;
      default:
        alert('Not a valid command! Try to cd into Projects, About, Resume, GitHub, or LinkedIn :) \nFor example: cd projects');
    }
    form.reset(); // Clear the input after submit
  }

  private scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
