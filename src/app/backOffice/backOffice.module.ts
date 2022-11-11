import { BackOfficeComponent } from './backOffice.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    BackOfficeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BackOfficeModule{

}
