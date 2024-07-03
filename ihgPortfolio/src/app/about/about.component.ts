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
  templateUrl: "./about.component.html",
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

}
