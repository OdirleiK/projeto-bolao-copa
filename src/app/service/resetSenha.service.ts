import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:8080/users/user/resetPassword';

@Injectable({
  providedIn: 'root'
})
export class ResetSenhaService{

  constructor(private http: HttpClient) {}

  sendToke(email: string) {
      return this.http.post(API, {email});
  }

}
