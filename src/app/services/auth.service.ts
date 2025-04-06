import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false)
  private token: string | null = null;

  private baseUrl = environment.API_URL

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<Boolean> {
    const credentials = { username, password }
    return this.http.post(`${this.baseUrl}/auth/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.token = response.token;
          this.isLoggedIn.next(true);
          this.router.navigate(["/home"])
        }
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token')
    this.token = null
    this.isLoggedIn.next(false)
    this.router.navigate(["/login"])
  }

  isAuthenticated(): Observable<Boolean> {
    return this.isLoggedIn.asObservable()
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }

  getAuthHeaders() {
    const token = this.getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }
}
