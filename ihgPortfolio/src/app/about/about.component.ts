import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template:`
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
  </main>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

}
