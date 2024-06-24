import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
  ],
  template: `
  <main>
    <p>
      app page
    </p>
    <a [routerLink]="['/']"></a>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
