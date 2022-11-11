import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    id: 0,
    nome: '',
    email: '',
    //add campos
  });
  private userName!: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({ id: 0, nome: '', email: '' });
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken() as string;
    const payloadUser = jwt_decode(token) as User;
    this.userName = payloadUser.nome;
    this.userSubject.next(payloadUser);
  }
}
