import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewPassword } from 'src/app/models/newPassword';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  updatePassword : NewPassword = {
    id : JSON.parse(localStorage.getItem('user') || '{}').id,
    password: '',
    confirmPassWord: '',
  }
  constructor(private UserService: UserServie, private sncakBar: MatSnackBar) {}

  updatePasswordUser() {
    if(this.updatePassword.password === this.updatePassword.confirmPassWord) {
      this.updatePassword.id = JSON.parse(localStorage.getItem('user') || '{}').id;
      this.UserService.updatePassword(this.updatePassword).pipe().subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.sncakBar.open('Password update successfull', 'Close', {
        duration: 3000,
      });
      });
      console.log(this.updatePassword);
    } else {
      this.sncakBar.open('Password not match', 'Close', {
        duration: 3000,
      });    
    }
  }

}
