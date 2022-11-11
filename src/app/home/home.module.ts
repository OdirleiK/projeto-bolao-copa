import { NovaSenhaComponent } from './novaSenha/novaSenha.component';
import { ResetSenhaComponent } from './resetSenha/resetsenha.component';
import { BLmessageModule } from './../shared/components/blmessage.module';
import { RegisterComponent } from './register/register.component';
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
      RegisterComponent,
      ResetSenhaComponent,
      NovaSenhaComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      HomeRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BLmessageModule
    ],

})
export class HomeModule{}
