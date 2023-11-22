import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnDestroy {
  private subcription$ = new Subscription();
  category: Category[] = [];
  popularProducts: Product[] = [];
  newProducts: Product[] = [];
  constructor(
    private categoryService: CategoryService,
    private heroService: HeroService
  ) {}
  ngOnInit(): void {
    this.categoryService
      .getAllCategorys()
      .pipe()
      .subscribe((data) => {
        this.category = data;
      });
    this.heroService
      .getPopularProducts()
      .pipe()
      .subscribe((data) => {
        this.popularProducts = data;
      });
    this.heroService
      .getNewProducts()
      .pipe()
      .subscribe((data) => {
        this.newProducts = data;
      });
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
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
  categorys: Category[] = [
    {
      nameCategory: 'Apparel and accessories',
      image: 'assets/accessories.jpg',
    },
    {
      nameCategory: 'Consumer electronics',
      image: 'assets/electronic.jpg',
    },
    {
      nameCategory: 'Books, movies and music',
      image: 'assets/book.jpeg',
    },
    {
      nameCategory: 'Clothing and Shoes',
      image: 'assets/fast-fashion.jpeg',
    },
    {
      nameCategory: 'Personal care and beauty',
      image: 'assets/main-qimg.jfif',
    },
    {
      nameCategory: 'Furniture and decor',
      image: 'assets/Furniture.jpg',
    },
  ];
}
