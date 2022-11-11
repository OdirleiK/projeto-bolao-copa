import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class NovaSenhaService{

  constructor(private http: HttpClient) {}

  novaSenha() {
    
  }
}
