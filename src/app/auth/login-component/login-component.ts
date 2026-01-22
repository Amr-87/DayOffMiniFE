import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  model = {
    email: '',
    password: '',
  };

  isLoading = signal(false);
  showPassword = false;

  constructor(private authService: AuthService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }

    this.isLoading.set(true);

    console.log('Login data:', this.model);

    this.authService.login(this.model.email, this.model.password).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('token', (response as any).token);
        this.isLoading.set(false);
        alert('Logged in successfully');
      },
      error: (error) => {
        // console.error('Login error:', error);
        this.isLoading.set(false);
        alert(`Login failed: ${error.error.message}`);
      },
    });
  }
}
