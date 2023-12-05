import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../store/actions';
import { RegisterRequest } from 'src/app/models/auth/registerRequest';
import { selectStatus, selectValidatonError } from '../store/reducers';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  fileHolder: File | null = null;
  isSubmitted = false;
  form = this.fb.group({
    fullName: ['', Validators.required],
    birthday: ['' , Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    image: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
    confirmpassword: ['', [Validators.required, Validators.min(8)]],
    role: ['Client'],
  });
  data$ = combineLatest({
    status: this.store.select(selectStatus),
    errors: this.store.select(selectValidatonError),
  });
  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    console.log('form', this.form.getRawValue());
    if (this.form.valid && this.fileHolder) {
      if (this.form.value.password === this.form.value.confirmpassword) {
        

        const reader = new FileReader();
        reader.readAsArrayBuffer(this.fileHolder);
        reader.onload = (event) => {
          const fileContent = event.target?.result as ArrayBuffer;
          const byteArray = new Uint8Array(fileContent);

          const request: RegisterRequest = {
            fullName: this.form.get('fullName')?.value || '',
            email: this.form.get('email')?.value || '',
            address: this.form.get('address')?.value || '',
            phone: this.form.get('phone')?.value || '',
            password: this.form.get('password')?.value || '',
            role: this.form.get('role')?.value || '',
            image: Array.from(byteArray),
            birthday: new Date(this.form.get('birthday')?.value || ''),
          };

          console.log('request', request);

          this.store.dispatch(authActions.register({ request }));
        }   
        console.log(this.fileHolder);
      } else {
        const errorMessage = 'Password mismatch !';
        this.showAlert(errorMessage);
        this.store.dispatch(
          authActions.registerFailure({ erros: { error: errorMessage } })
        );
      }
    } else {
      const errorMessage = 'Invalid information !';
      this.showAlert(errorMessage);
      this.store.dispatch(
        authActions.registerFailure({ erros: { error: errorMessage } })
      );
    }
  }

  onFileChange(event: any) {
    if(event.target.files.length > 0){
      this.fileHolder = event.target.files[0];
    }
  }
  showAlert(message: string) {
    window.alert(message);
  }
}
