import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/models/cart';
import { OrderClient } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { cartActions } from '../cart/store/actions';
import { UserServie } from 'src/app/services/user.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.scss']
})
export class ChekoutComponent implements OnInit {
  order !: OrderClient;
  carts: Cart[] =[];
  user = JSON.parse(localStorage.getItem('user') || '{}');
  userAdderss: String = '';
  constructor(private route: ActivatedRoute, private router: Router, private orderService:OrderService, private store: Store, private userService:UserServie) {}
  ngOnInit(): void {
    this.order =  this.route.snapshot.params['order'];
    this.userAdderss = this.user.address.replace(/,/g, ', ').replace(/\s+/g, ' ');
    console.log(this.order);
    this.userService.getAllCards(this.user.id).subscribe((data) => {
      this.carts = data;
      //nzid lcard mat order
    })
  }
  confirmOrder() {
    this.orderService.createOrder(this.order).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/validate']);
      this.store.dispatch(cartActions.clearCart());
    });
    
  }
  cartss : Cart[] = [
    {
      id: '1',
      cardNumber: 1223266399326964,
      cardHolderName: 'Sterling',
      experationDate: new Date(2022, 11),
      cvv: 223,
      }, 
  ] ;
}
