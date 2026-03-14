import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/components/footer';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ThemeService } from './core/services/theme.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, ToastModule, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('moduleyard-ui');
  themeService = inject(ThemeService);
}
