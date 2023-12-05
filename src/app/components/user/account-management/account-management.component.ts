import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { PersistanceService } from 'src/app/services/persistance.service';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {
  user : User = {
    fullName: '',
    email: '',
    password: '',
    birthday: new Date(),
    address: '',
    phone: '',
    image: '',
    role: '',
    token: '',
  };
  constructor(private userService: UserServie) { }
  ngOnInit(): void {
    this.userService.getUser().subscribe(
       (user: User | null) => {
        if (user !== null) {
          this.user = {
            ...user,
            image: 'data:image/jpeg;base64,' + user.image,
          };
        }
        return user;
      }
    );
    
  }
  

}
