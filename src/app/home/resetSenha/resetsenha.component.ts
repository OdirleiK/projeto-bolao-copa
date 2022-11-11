import { ResetSenhaService } from './../../service/resetSenha.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: './resetsenha.component.html',
  styleUrls: ['./resetsenha.component.css'],
})
export class ResetSenhaComponent implements OnInit {

  resetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private resetSenhaService: ResetSenhaService,
  ) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['',
          [
            Validators.required,
            Validators.email
      ]],
  })
  }

  resetSenha() {
    this.resetSenhaService.sendToke(this.resetForm.controls['email'].value
    )
    .subscribe(() => {
      this.router.navigate(['novasenha'])
    })
  }


}
