import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  userName = 'Amr Gamal'; // later get from JWT or API
  darkModeOn = signal(false);
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    this.darkModeOn.set(!this.darkModeOn());
  }
}
