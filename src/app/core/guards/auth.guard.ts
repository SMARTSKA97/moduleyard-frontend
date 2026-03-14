import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const notify = inject(NotificationService);

    // If they are logged in, let them pass!
    if (authService.isAuthenticated()) {
        return true;
    }

    // If they are NOT logged in, kick them out and show a warning
    notify.error('Access Restricted', 'You must be logged in to view that page.');
    router.navigate(['/login']);
    return false;
};