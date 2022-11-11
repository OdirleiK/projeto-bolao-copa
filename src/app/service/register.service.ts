import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


const API = 'http://localhost:8080/users/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  register(nome: string, sobrenome: string,  email: string, senha: string): Observable<any> {
    return this.http.post(API, {nome, sobrenome, email, senha});
  }

}
