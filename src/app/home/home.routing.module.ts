import { NovaSenhaComponent } from './novaSenha/novaSenha.component';
import { ResetSenhaComponent } from './resetSenha/resetsenha.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Registre-se'
        }
      },
      {
        path: 'resetSenha',
        component: ResetSenhaComponent,
        data: {
          title: 'Registre-se'
        }
      },
      {
        path: 'novasenha',
        component: NovaSenhaComponent,
        data: {
          title: 'Registre-se'
        }
      },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class HomeRoutingModule{}
