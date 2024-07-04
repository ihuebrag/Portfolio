import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.css']
})
export class FloatingMenuComponent {
  showMenu = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const triggerPoint = document.querySelector('.welcomeSection')?.getBoundingClientRect().top || 0;
    this.showMenu = window.pageYOffset > triggerPoint;
  }
}
