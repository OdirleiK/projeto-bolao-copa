import { GamesModule } from './../games/games.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    GamesModule
  ],
  providers: [

  ]
})
export class CoreModule{}
