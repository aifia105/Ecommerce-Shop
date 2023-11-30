import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderClient } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnDestroy {
  private subscription$ = new Subscription();
  user = JSON.parse(localStorage.getItem('user') || '{}');
  ordersHistory: OrderClient[] = [];
  constructor(private orderService:OrderService) {}
  ngOnInit(): void {
    this.subscription$.add(
      this.orderService.getHistoryOrdersUser(this.user.id).pipe().subscribe((data) => {
        this.ordersHistory =  data;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
