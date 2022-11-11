import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PontosComponent } from "./pontos.component";

@NgModule({
  declarations: [
    PontosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PontosModule {}
