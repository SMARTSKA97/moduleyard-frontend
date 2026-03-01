import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sys-monitor',
        loadComponent: () => import('./features/sys-monitor/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: '',
        redirectTo: 'sys-monitor',
        pathMatch: 'full'
    }
];
