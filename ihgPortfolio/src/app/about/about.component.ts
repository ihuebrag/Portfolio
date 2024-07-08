import { Component, inject, ElementRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';


declare var particlesJS: any; // if this isn't here, particlesJS can't be found

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    FormsModule
  ],
  templateUrl: "./about.component.html",
  styleUrls: ['./about.component.css', '../home/home.component.css']
})
export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    // smooth scrolling
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0
    });

    sections.forEach(section => {
      observer.observe(section);
    });


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

  @ViewChild('educationContent') educationContent!: ElementRef; //this allows to scroll down

  constructor(private router: Router) {} // this allows between page navigation

  onSubmit(form: any) {
    const section = form.value.section.trim().toLowerCase();
    switch (section) {
      case 'cd home':
        this.router.navigate(['']);
        break;
      case 'cd education':
        this.scrollToSection(this.educationContent);
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
        alert('Not a valid command! Try to cd into the start page (home), Education, About, Resume, GitHub, or LinkedIn :) \nFor example: cd home');
    }
    form.reset(); // Clear the input after submit
  }

  private scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
