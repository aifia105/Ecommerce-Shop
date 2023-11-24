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
  card : Cart = {
    id: null,
    cardNumber: 0,
    cardHolderName: '',
    experationDate: new Date(),
    cvv: 0
  };
  constructor(private UserService: UserServie, private route:Router) {}

  addCard() {
    this.UserService.addCard(this.card).pipe().subscribe(() => {
      this.route.navigate(['/user/payment']);
    })
    console.log(this.card);
  }
}
