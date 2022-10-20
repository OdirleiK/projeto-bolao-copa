import { Component, Input, OnInit } from "@angular/core";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  @Input() loginBtn!: string;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('enviado');
  }
}
