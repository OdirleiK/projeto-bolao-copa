import { Observable } from 'rxjs';
import { Palpite } from './../interface/palpite';
import { Jogo } from './../interface/jogo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:8080/jogos';
const API_POST = 'http://localhost:8080/palpites/palpitar';

@Injectable({
  providedIn: 'root',
})
export class PalpiteService{

  constructor(private http: HttpClient) {}

  findAllJogos() {
    return this.http.get<Jogo[]>(API);
  }

  insertPalpite(
        jogo_id: number,
        usuario_id: number,
        resultado: string): Observable<Palpite> {
      return this.http.post<Palpite>(API_POST, {jogo_id, usuario_id, resultado});
  }

 
}
