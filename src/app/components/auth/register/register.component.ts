import { Component } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../store/actions';
import { RegisterRequest } from 'src/app/models/auth/registerRequest';
import { selectStatus, selectValidatonError } from '../store/reducers';
import { AuthStateInterface } from '../authStateInterface';
import { AuthService } from 'src/app/services/auth.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    fullname: ['',Validators.required ],
    birthday: ['',Validators.required],
    address:  ['',Validators.required],
    phone:  ['',Validators.required],
    email:  ['',Validators.required , Validators.email],
    password:  ['',Validators.required, Validators.min(8)],
    confirmpassword:  ['',Validators.required, Validators.min(8)],
  })
  data$ = combineLatest({
    status : this.store.select(selectStatus),
    errors : this.store.select(selectValidatonError)
  })
  constructor(private fb:FormBuilder, private store: Store ){}

  onSubmit(){
    console.log('form', this.form.getRawValue());
    const request: RegisterRequest = this.form.getRawValue();
    this.store.dispatch(authActions.register({request}))
  }

}
