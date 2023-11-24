import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private route: ActivatedRoute, private auth: AuthService) {}
  ngOnInit(): void {
  console.log(this.user);
  }

  logout(): void {
    this.auth.logout();
  }
 
}
