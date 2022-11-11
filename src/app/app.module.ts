import { BackOfficeModule } from './backOffice/backOffice.module';
import { PalpiteModule } from './Palpites/palpites.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HomeRoutingModule } from './home/home.routing.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ErrosModule } from './errors/errors.module';
import { GamesModule } from './games/games.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeRoutingModule,
    AppRoutingModule,
    ErrosModule,
    GamesModule,
    PalpiteModule,
    BackOfficeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
