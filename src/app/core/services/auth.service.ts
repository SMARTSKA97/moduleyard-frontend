import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' // This makes the service available everywhere
})
export class AuthService {
    private http = inject(HttpClient);

    // REPLACE 5xxx WITH YOUR ACTUAL .NET PORT!
    private apiUrl = 'http://localhost:5145/api/auth';

    verifyTotp(email: string, code: string): Observable<any> {
        const payload = { email, code };
        return this.http.post(`${this.apiUrl}/verify-totp`, payload);
    }

    // --- NEW: Session Management ---

    // Call this when the API says success
    setLoggedIn() {
        localStorage.setItem('isAuthenticated', 'true');
    }

    // Call this on logout
    logout() {
        localStorage.removeItem('isAuthenticated');
    }

    // The Guard will check this
    isAuthenticated(): boolean {
        return localStorage.getItem('isAuthenticated') === 'true';
    }
}