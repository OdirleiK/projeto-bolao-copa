
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],

})
export class GamesModule{}
