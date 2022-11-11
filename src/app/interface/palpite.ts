import { User } from './user';
import { Time } from "@angular/common";
import { Jogo } from "./jogo";
import { Resultado } from '../enums/resultado';

export interface Palpite {

  id: number;
  jogo_id: Jogo;
  usuario_id: User;
  resultado: Resultado;

}
