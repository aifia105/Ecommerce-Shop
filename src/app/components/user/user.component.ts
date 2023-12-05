import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { selectCurrentUser } from '../auth/store/reducers';
import { authActions } from '../auth/store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  user : User = {
    fullName: '',
    email: '',
    password: '',
    birthday: new Date(),
    address: '',
    phone: '',
    image: '' ,
    role: '',
    token: '',
  };
  constructor(private auth: AuthService, private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(authActions.getUser({user: this.currentUser}));
    this.store.select(selectCurrentUser).pipe().subscribe( async (user : User | null) => {
      if(user != null) {
        this.user = {
          ...user,
          image: 'data:image/jpeg;base64,' + user.image,
        }; 
        return this.user;
      }
      return this.user;
    });
  }

  logout(): void {
    this.auth.logout();
  }
 
}
