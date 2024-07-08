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
