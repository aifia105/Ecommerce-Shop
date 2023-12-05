import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-card',
  templateUrl: './manage-card.component.html',
  styleUrls: ['./manage-card.component.scss']
})
export class ManageCardComponent {
  expirationDate: string = '';
  card : Cart = {
    id: null,
    cardNumber: 0,
    cardholderName: '',
    expirationDate: new Date(),
    cvv: 0,
    user: JSON.parse(localStorage.getItem('user') || '{}')
  };
  constructor(private UserService: UserServie, private route:Router) {}

  addCard() {
    this.expirationDate = new Date(this.card.expirationDate).toISOString();
    this.card.expirationDate = new Date(this.expirationDate);
    this.UserService.addCard(this.card).pipe().subscribe(() => {
      this.route.navigate(['/user/payment']);
    })
    console.log(this.card);
  }
}
