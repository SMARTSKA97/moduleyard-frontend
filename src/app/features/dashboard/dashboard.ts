import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, CardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private router = inject(Router);
  private authService = inject(AuthService);

  modules = [
    { title: 'Financial Planner', description: 'Manage budgets, track expenses, and forecast growth.', icon: 'pi-chart-line', color: 'text-emerald-500' },
    { title: 'Invoice Generator', description: 'Create, manage, and export professional PDF invoices.', icon: 'pi-file-pdf', color: 'text-blue-500' },
    { title: 'Agreement Maker', description: 'Draft secure contracts and standardized business agreements.', icon: 'pi-briefcase', color: 'text-purple-500' },
    { title: 'System Settings', description: 'Manage users, roles, and global application preferences.', icon: 'pi-cog', color: 'text-gray-500' }
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
