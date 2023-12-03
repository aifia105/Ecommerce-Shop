import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnDestroy {
  private subscription$ = new Subscription();
  card: Cart[] = [];
  UserId: string= '';
  constructor(private UserService:UserServie) {}

  ngOnInit(): void {
    this.UserId = JSON.parse(localStorage.getItem('user') || '{}').id;
    this.subscription$.add(
      this.UserService.getAllCards(this.UserId).pipe().subscribe((cards) => {
        this.card = cards;
        console.log(this.card);
      })
    )
  }

  deleteCard(id: string | null) {
    this.subscription$.add(
      this.UserService.deleteCard(id).pipe().subscribe(() => {
        this.card = this.card.filter((card) => card.id !== id);
      })
    )
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
