import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isDarkMode = false;

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const root = document.querySelector('html');

        // This single toggle controls BOTH Tailwind and PrimeNG globally!
        if (this.isDarkMode) {
            root?.classList.add('app-dark');
        } else {
            root?.classList.remove('app-dark');
        }
    }

    isDark(): boolean {
        return this.isDarkMode;
    }
}