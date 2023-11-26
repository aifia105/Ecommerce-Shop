import { Component } from '@angular/core';
import { OrderClient } from 'src/app/models/order';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  quantity : number = 0;
  user = JSON.parse(localStorage.getItem('user') || '{}');
  order: OrderClient = {
    dateOrder: new Date(),
    orderStatus: 'pending',
    user: this.user,
    product: [],
    total: 0,
  };
  
  ngOnInit() {
    console.log(this.order);
  }
  resetOrder() {
    this.order = {
      dateOrder: new Date(),
      orderStatus: 'pending',
      user: this.user,
      product: [],
      total: 0,
    };
  }






  products: Product[] = [
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    
  ];
  quantityPlus(){
    this.quantity++;
    }
    quantityMinus(){
    this.quantity--;
    }
}
