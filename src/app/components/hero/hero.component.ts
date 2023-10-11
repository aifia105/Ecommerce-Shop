import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  products : Product[] = [
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },
    {name : "iphone 7" ,
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000"
    },

  ];
  itemsPerPage = 4;
  currentPage = 0;
  moveCarousel(direction: number) {
    const nextPage = this.currentPage + direction;
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    if (nextPage >= 0 && nextPage < totalPages) {
      this.currentPage = nextPage;
    }
  }



}
