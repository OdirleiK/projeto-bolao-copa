import { BackOfficeComponent } from './backOffice/backOffice.component';
import { TopPalpitesComponent } from './topPalpites/topPalpites.component';
import { PontosComponent } from './pontos/pontos.component';
import { PalpitesComponent } from './Palpites/palpites.component';
import { GamesComponent } from './games/games.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'jogos',
    component: GamesComponent,
    data: {
      title: 'Jogos'
    }
  },
  {
    path: 'palpites',
    component: PalpitesComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'pontos',
    component: PontosComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'topPalpites',
    component: TopPalpitesComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'backOffice',
    component: BackOfficeComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
      data: {
        title: 'Not found'
      }
  },
  {
    path: '**',
    redirectTo: 'not-found'
}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
