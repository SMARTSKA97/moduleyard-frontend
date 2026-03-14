import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <footer class="w-full py-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <p>
        Made with <i class="pi pi-heart-fill text-red-500 text-xs mx-1 animate-pulse"></i> using 
        <span class="font-semibold text-red-600">Angular</span>, 
        <span class="font-semibold text-blue-500">PrimeNG</span>, 
        <span class="font-semibold text-purple-600 dark:text-purple-400">.NET</span>, and 
        <span class="font-semibold text-blue-400">PostgreSQL</span>.
      </p>
    </footer>
  `
})
export class Footer { }