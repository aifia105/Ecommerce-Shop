import { Component } from '@angular/core';
import { NewPassword } from 'src/app/models/newPassword';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  updatePassword : NewPassword = {
    id: 0,
    newPassword: '',
    confirmPassword: '',
  }
  constructor(private UserService: UserServie) {}

  updatePasswordUser() {
    if(this.updatePassword.newPassword === this.updatePassword.confirmPassword) {
      this.updatePassword.id = JSON.parse(localStorage.getItem('user') || '{}').id;
      this.UserService.updatePassword(this.updatePassword).pipe().subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Update successfull');
      });
      console.log(this.updatePassword);
    } else {
      alert('Password not match');
    }
  }

}
