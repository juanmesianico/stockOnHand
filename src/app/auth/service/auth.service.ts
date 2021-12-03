import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILoginStatus } from '../login-status.interface';
import { IRegistrationStatus } from '../registratio-status.interface';
import { IUser } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }

  login(user: IUser): Observable<ILoginStatus>{
    return this.httpClient.post<ILoginStatus>(`${this.API_URL}/auth/login`, user);
  }

  register(user: IUser): Observable<IRegistrationStatus>{
    return this.httpClient.post<IRegistrationStatus>(`${this.API_URL}/auth/register`, user);
  }

  isLoggedIn(): boolean{
    return false;
  }

  logOut(): void{
    this.router.navigate(['/login']);
  }

  getToken(): string{
    return '';
  }
}
