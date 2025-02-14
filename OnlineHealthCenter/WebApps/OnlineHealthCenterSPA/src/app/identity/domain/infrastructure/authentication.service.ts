import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest } from '../model/login-request';
import { ILoginResponse } from '../model/login-response';
import { ILogoutRequest } from '../model/logout-request';
import { IRefreshTokenRequest } from '../model/refresh-token-request';
import { IRefreshTokenResponse } from '../model/refresh-token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly url: string = 'http://localhost:4000/api/v1/Authentication';

  constructor(private httpClient: HttpClient) { }

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(`${this.url}/Login`, request);
  }

  public logout(request: ILogoutRequest): Observable<Object> {
    return this.httpClient.post(`${this.url}/Logout`, request);
  }

  public refreshToken(request: IRefreshTokenRequest): Observable<IRefreshTokenResponse> {
    return this.httpClient.post<IRefreshTokenResponse>(`${this.url}/Refresh`, request);
  }
}