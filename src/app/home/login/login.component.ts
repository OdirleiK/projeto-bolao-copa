import { AuthService } from './../../auth/auth.service';
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  @Input() loginBtn!: string;

  fromUrl!:string
  loginForm!: FormGroup;

  constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fromUrl = params["fromUrl"]
    })
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService
      .userAuthenticate(email, password)
      .subscribe((response) => {
        this.router.navigate(['/jogos']); 
      }),
      (err: Error) => console.log(`Erro ao realizar o login -> ${err}`);
  }
}
