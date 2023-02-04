import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFG: FormGroup;

  hide = true;

  constructor(fb: FormBuilder, public authService: AuthService) {
    this.loginFG = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginSubmit() {
    console.log(this.loginFG.value.email, this.loginFG.value.password);
    this.authService
      .SignIn(this.loginFG.value.email, this.loginFG.value.password)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Success');
      });
  }
}
