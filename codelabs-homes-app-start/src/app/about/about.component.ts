import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template:`
    <p> About works </p>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

}
