import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: BehaviorSubject<{token: string}> = new BehaviorSubject<{token: string}>(null);

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${environment.baseUrl}login`, user);
  }

  get userToken() {
    return this.token.getValue();
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token.next(token);
  }
}
