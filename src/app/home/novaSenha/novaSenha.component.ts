import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: './novaSenha.component.html',
  styleUrls: ['./novaSenha.component.css'],
})

export class NovaSenhaComponent implements OnInit {

  nvsenhaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.nvsenhaForm = this.formBuilder.group({
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

  novaSenha() {
    return null;
  }
}
