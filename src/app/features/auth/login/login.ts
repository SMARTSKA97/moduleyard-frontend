import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from '../../../core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  totpCode: string = '';

  private authService = inject(AuthService);
  private notify = inject(NotificationService);
  private router = inject(Router);

  onSubmit() {
    this.authService.verifyTotp(this.email, this.totpCode).subscribe({
      next: (response) => {
        this.notify.success('Access Granted', 'Welcome to ModuleYard Secure Admin.');
        this.totpCode = '';
        this.authService.setLoggedIn();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.totpCode = '';

        if (err.status === 401 || err.status === 400) {
          const backendMessage = err.error?.message || 'Invalid credentials or expired code.';
          this.notify.error('Access Denied', backendMessage);
        } else {
          this.notify.error('System Error', 'Could not connect to the authentication server.');
        }
      }
    });
  }
}
