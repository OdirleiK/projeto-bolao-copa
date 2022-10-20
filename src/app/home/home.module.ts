import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      HomeComponent,
      LoginComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      HomeRoutingModule,
      FormsModule,
      ReactiveFormsModule,
    ],

})
export class HomeModule{}
