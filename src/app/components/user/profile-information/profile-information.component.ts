import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent {
  currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  user: any = {
  fullName: '',
  birthday: new Date().toISOString() ,
  image: null,
  address: '',
  email: '',
  password:'',
  confirmpassword: '',
  phone: '',
  role: 'Client',
  }

  onFileSelected(event: any) {
    this.user.picture = event.target.files[0];
  }
  constructor(private UserService: UserServie, private sncakBar: MatSnackBar) {}
  
  updateUser() {
    this.user.birthday = new Date(this.user.birthday);
    if(this.user.password == this.user.confirmpassword) {
      this.UserService.updateUser(this.user,this.currentUser.id).pipe().subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Update successfull');
      });
      console.log(this.user);
    } else {
      this.sncakBar.open('Password and Confirm Password are not the same', 'Close', {
        duration: 3000,
      });
    }
  }

}
