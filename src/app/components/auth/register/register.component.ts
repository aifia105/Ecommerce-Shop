import { Component } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../store/actions';
import { RegisterRequest } from 'src/app/models/auth/registerRequest';
import { selectStatus, selectValidatonError } from '../store/reducers';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isSubmitted = false;
  form = this.fb.nonNullable.group({
    fullname: ['',Validators.required ],
    birthday: ['',Validators.required],
    address:  ['',Validators.required],
    phone:  ['',Validators.required],
    email:  ['',[Validators.required , Validators.email]],
    password:  ['',[Validators.required, Validators.min(8)]],
    confirmpassword:  ['',[Validators.required, Validators.min(8)]],
    role:['client']
  })
  data$ = combineLatest({
    status : this.store.select(selectStatus),
    errors : this.store.select(selectValidatonError)
  })
  constructor(private fb:FormBuilder, private store: Store ){}

  onSubmit(){
    console.log(this.form.invalid);
    console.log('form', this.form.getRawValue());
    if(this.form.valid){
      if(this.form.value.password === this.form.value.confirmpassword){
      const request: RegisterRequest = this.form.getRawValue();
      this.store.dispatch(authActions.register({request}))
      }else{
        const errorMessage = "Password mismatch !";
        this.showAlert(errorMessage);
        this.store.dispatch(authActions.registerFailure({erros : {error : errorMessage}}))
      }
    } else {
      const errorMessage = "Invalid information !";
      this.showAlert(errorMessage);
      this.store.dispatch(authActions.registerFailure({erros : {error : errorMessage}}))
    }
  }
  showAlert(message: string) {
    window.alert(message);
}

}
