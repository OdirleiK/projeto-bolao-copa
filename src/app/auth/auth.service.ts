import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthToken } from '../interface/authToken';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  //realizar a requisição
  userAuthenticate(userName: string, password: string) {
    let oauth2_token_endpoint = 'http://localhost:8080/oauth/token';
    let oauth2_client_id = 'bolaocopa';
    let oauth2_client_secret = '12345678';

    const httpOtions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' + btoa(oauth2_client_id + ':' + oauth2_client_secret),
      }),
    };

    const body =
      'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
        .replace('{0}', oauth2_client_id)
        .replace('{1}', oauth2_client_secret)
        .replace('{2}', userName)
        .replace('{3}', password);

    console.log(httpOtions);

    return this.http
      .post<AuthToken>(oauth2_token_endpoint, body, httpOtions)
      .pipe(
        tap((response) => {
          const authToken = response.access_token;
          console.log(response);

          this.userService.setToken(authToken);
        })
      );
  }
}
