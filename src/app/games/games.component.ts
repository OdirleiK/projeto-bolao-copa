import { Times } from './../interface/times';
import { Observable } from 'rxjs';
import { TimeService } from './../service/time.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  times: Times[] = [];
  grupoA: Times[] = [];
  grupoB: Times[] = [];
  grupoC: Times[] = [];
  grupoD: Times[] = [];
  grupoE: Times[] = [];
  grupoF: Times[] = [];
  grupoG: Times[] = [];
  grupoH: Times[] = [];

  constructor(
    private route: Router,
    private timeService: TimeService
    ){}



    ngOnInit(): void {
      this.timeService
        .ListFromTime('A')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoA.push(selecao))
        );
      this.timeService
        .ListFromTime('B')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoB.push(selecao))
        );
      this.timeService
        .ListFromTime('C')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoC.push(selecao))
        );
      this.timeService
        .ListFromTime('D')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoD.push(selecao))
        );
      this.timeService
        .ListFromTime('E')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoE.push(selecao))
        );
      this.timeService
        .ListFromTime('F')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoF.push(selecao))
        );
      this.timeService
        .ListFromTime('G')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoG.push(selecao))
        );
      this.timeService
        .ListFromTime('H')
        .subscribe((time: Times[]) => time.forEach((selecao) => this.grupoH.push(selecao))
        );
  }



  palpitar() {
    this.route.navigate(['palpites']);
  }
}
