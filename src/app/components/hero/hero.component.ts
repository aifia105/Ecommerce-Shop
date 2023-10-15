import { Component} from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {


  products : Product[] = [
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    ];
    categorys : Category[] = [{
      nameCategory: "Apparel and accessories",
      image:"assets/accessories.jpg"
    },
    {
      nameCategory: "Consumer electronics",
      image:"assets/electronic.jpg"
    },
    {
      nameCategory: "Books, movies and music",
      image:"assets/book.jpeg"
    },
    {
      nameCategory: "Clothing and Shoes",
      image:"assets/fast-fashion.jpeg"
    },
    {
      nameCategory: "Personal care and beauty",
      image:"assets/main-qimg.jfif"
    },
    {
      nameCategory: "Furniture and decor",
      image:"assets/Furniture.jpg"
    },
    
  ];
 



}
