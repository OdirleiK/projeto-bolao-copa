import { RegisterService } from './../../service/register.service';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewUser } from 'src/app/interface/newUser';


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
  ) {}

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        nome: ['',
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(15)
        ]],
        sobrenome: ['',
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(15)
        ]],
        email: ['',
            [
              Validators.required,
              Validators.email
        ]],
        senha: ['',
            [
              Validators.required,
              Validators.minLength(8),
        ]],
        confirmsenha: ['',
            [
              Validators.required
        ]],
    })
  }

  register() {
      this.registerService
        .register(
          this.registerForm.controls['nome'].value,
          this.registerForm.controls['sobrenome'].value,
          this.registerForm.controls['email'].value,
          this.registerForm.controls['senha'].value
        )
        .subscribe(() => {
          this.router.navigate([''])
        }),
        (err: Error) => console.log(`Erro ao realizar o Register -> ${err}`);
    }

}
