import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSignal = signal(false);
  private platformId = inject(PLATFORM_ID);
  
  isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  
  login(username: string, password: string): boolean {
    // Simple authentication - in production, this should call a backend API
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticatedSignal.set(true);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('isLoggedIn', 'true');
      }
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.isAuthenticatedSignal.set(false);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLoggedIn');
    }
  }
  
  checkAuthStatus(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      this.isAuthenticatedSignal.set(isLoggedIn);
    }
  }
}
