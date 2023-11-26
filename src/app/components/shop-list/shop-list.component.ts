import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { shopActions } from './store/actions';
import { cartActions } from '../cart/store/actions';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  grid: boolean = true;
  isSelected: boolean = true;

  categories: Category[] = [
    { nameCategory: 'Apparel and accessories' },
    { nameCategory: 'Consumer electronics' },
    { nameCategory: 'Books, movies and music ' },
    { nameCategory: 'Clothing and Shoes' },
    { nameCategory: 'Personal care and beauty' },
    { nameCategory: 'Furniture and decor' },
  ];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(shopActions.getCategory());
    this.store.dispatch(shopActions.getProducts());
  }

  addToCart(product: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { product, quantity: 1, total: product.priceTTC  }}));
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

  changeview(grid: boolean) {
    this.grid = !this.grid;
  }
  swapColors() {
    this.isSelected = !this.isSelected;
  }
}
