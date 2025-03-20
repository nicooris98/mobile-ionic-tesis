import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageKey = 'user';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.storageKey, JSON.stringify({ username }));
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }
}
