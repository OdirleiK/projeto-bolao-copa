import { Resultado } from './../enums/resultado';
import { TypeModifier } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Jogo } from "../interface/jogo";
import { PalpiteService } from "../service/palpite.service";

@Component({
  templateUrl: './palpites.component.html',
  styleUrls: ['./palpites.component.css']
})
export class PalpitesComponent implements OnInit {

  jogos: Jogo[] = [];


  constructor(
    private palpiteService: PalpiteService,
  ) {}

  ngOnInit(): void {
    this.palpiteService
      .findAllJogos()
      .subscribe(confronto => this.jogos = confronto);
  }

  salvarPalpite(resultado: string, jogo_id: number) {
    let usuario_id: number = 20;
    this.palpiteService
        .insertPalpite(jogo_id, usuario_id, resultado)
        .subscribe(() => console.log("foi krl"))
     
  }
}
