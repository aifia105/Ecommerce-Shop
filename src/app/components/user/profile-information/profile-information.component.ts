import { Component } from '@angular/core';
import { Role } from 'src/app/models/Role';
import { UpdateUser } from 'src/app/models/updateUser';
import { User } from 'src/app/models/user';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent {
  user: UpdateUser = {
  fullName: '',
  birthday: new Date() ,
  picture: null,
  adress: '',
  email: '',
  phone: '',
  role: 'Client',
  }

  onFileSelected(event: any) {
    this.user.picture = event.target.files[0];
  }
  constructor(private UserService: UserServie) {}
  
  updateUser() {
    this.UserService.updateUser(this.user).pipe().subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Update successfull');
    });
    console.log(this.user);
  }

}
