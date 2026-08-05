import { Component } from '@angular/core';
import {FormBuilder, FormGroup,Validators,AbstractControl,ValidationErrors,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  hidePassword = true;

  registerForm: FormGroup;
  passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({

      nom: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.pattern(this.passwordRule)
      ]],

      confirmPassword: ['', Validators.required]

    },
    {
      validators: this.passwordMatchValidator
    });

  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return password === confirm
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {

    if(this.registerForm.invalid){
      return;
    }

    console.log(this.registerForm.value);

    // appel au service
    // this.authService.signup(this.registerForm.value).subscribe(...)

  }

}