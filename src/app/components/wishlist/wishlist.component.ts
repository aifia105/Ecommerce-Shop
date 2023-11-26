import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  availability: boolean = true;
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

}
