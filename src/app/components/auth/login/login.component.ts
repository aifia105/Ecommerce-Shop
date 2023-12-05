import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthentificationRequest } from 'src/app/models/auth/authenticationRequest';
import { authActions } from '../store/actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSubmitted = false;
  form = this.fb.nonNullable.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store, private sncakBar: MatSnackBar) {}
  onSubmit() {
    if (this.form.valid) {
      console.log('form', this.form.getRawValue());
      const request: AuthentificationRequest = this.form.getRawValue();
      this.store.dispatch(authActions.login({ request }));
    } else {
      this.store.dispatch(
        authActions.loginFailure({ erros: { error: 'infromation invalid !' } })
      );
      this.sncakBar.open('infromation invalid !', 'Close', {
        duration: 3000,
      });
    }
  }
}
