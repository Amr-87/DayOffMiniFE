import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5176/api/Auth/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(this.baseUrl + 'login', {
      email,
      password,
    });
  }
}
