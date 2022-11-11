import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class ErrosModule{}
