import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PalpitesComponent } from './palpites.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    PalpitesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PalpiteModule{

}
