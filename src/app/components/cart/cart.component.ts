import { Component, OnInit } from '@angular/core';
import { OrderClient } from 'src/app/models/order';
import { CartProduct } from 'src/app/models/cartProduct';
import { Store } from '@ngrx/store';
import { cartActions } from './store/actions';
import { selectItems } from './store/reducers';
import {  Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { chekoutActions } from '../chekout/store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: CartProduct[] = [];
  quantity : number = 1;
  total: number = 0;
  user = JSON.parse(localStorage.getItem('user') || '{}');
  order: OrderClient = {
    dateOrder: new Date(),
    orderStatus: 'pending',
    user: this.user,
    product:[],
    total: 0,
    card: {
      id: '',
      cardNumber: 0,
      cardHolderName: '',
      experationDate: new Date(),
      cvv: 0,
    }
  };
  constructor(private store: Store, private route: Router, private orderService: OrderService) {}
  
  ngOnInit() {
    this.store.select(selectItems).subscribe((data) => {
      this.products = data;
      this.total = this.products.reduce((acc, product) => acc + product.total, 0);
      this.order.product = this.products;
      this.order.total = this.total;
      this.order.user = this.user;
      this.order.dateOrder = new Date();
      this.order.orderStatus = 'submitted'
    });

    console.log(this.order);
    
  
  }
  submitOrder() {
    this.store.dispatch(chekoutActions.addToChekout({ orderClient: this.order}));
    this.route.navigate(['/checkout']);
  }
  removeFromCart(productId: string | undefined) {
    this.store.dispatch(cartActions.removeFromCart({ productId }));
  }
  clearCart() {
    this.store.dispatch(cartActions.clearCart());
  }
  
  quantityPlus(productId: string | undefined, priceTTC: number){
    this.quantity++;
    this.store.dispatch(cartActions.updateQuantity({productId, quantity: this.quantity}));
    this.store.dispatch(cartActions.updateTotal({productId, total: this.quantity * priceTTC}));
    }
    quantityMinus(productId: string | undefined, priceTTC: number){
    if(this.quantity > 1 ){
    this.quantity--;
    this.store.dispatch(cartActions.updateQuantity({productId, quantity: this.quantity}));
    this.store.dispatch(cartActions.updateTotal({productId, total: this.quantity * priceTTC}))
    }
    }
}
