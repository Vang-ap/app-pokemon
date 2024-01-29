import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: string;
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private router: Router) { }

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu');

    return of(isLoggedIn).pipe(

      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    )
  }

  logout() {
    console.log('auth service function logout')

    this.message = 'Vous êtes déconnecté';
    this.router.navigate(['/']);

  }
}
