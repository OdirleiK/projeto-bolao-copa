import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Times } from '../interface/times';

const API = 'http://localhost:8080/times/grupo/';

@Injectable({ providedIn: 'root'})
export class TimeService{

  nomeGrupo!: string;

  constructor(private http: HttpClient) {}

  ListFromTime(nomeGrupo: string) {
    return this.http.get<Times[]>(API + nomeGrupo);
  }

}
