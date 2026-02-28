import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, LoginRequest, RegisterRequest } from '../auth.modal';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://flower.elevateegy.com/api/v1/auth';

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/signin`, payload);
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/signup`, payload);
  }
}
