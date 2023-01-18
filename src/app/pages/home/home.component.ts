import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required, Validators.email],
    senha: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  public submitForm() {
    console.log(this.loginForm.value);
  }
}
