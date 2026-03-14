import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    // Helper to get the current theme colors for Swal
    private getBg() { return document.querySelector('html')?.classList.contains('my-app-dark') ? '#1f2937' : '#ffffff'; }
    private getText() { return document.querySelector('html')?.classList.contains('my-app-dark') ? '#ffffff' : '#000000'; }

    success(title: string, message: string) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'success',
            confirmButtonColor: '#3b82f6', // Tailwind blue-500
            background: this.getBg(),
            color: this.getText()
        });
    }

    error(title: string, message: string) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'error',
            confirmButtonColor: '#3b82f6',
            background: this.getBg(),
            color: this.getText()
        });
    }

    info(title: string, message: string) {
        Swal.fire({
            title: title,
            text: message,
            icon: 'info',
            confirmButtonColor: '#3b82f6',
            background: this.getBg(),
            color: this.getText()
        });
    }
}