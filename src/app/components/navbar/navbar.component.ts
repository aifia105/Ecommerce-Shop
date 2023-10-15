import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private route: Router){}

  search(){
    this.route.navigate(['/search'])
  }
  categories : Category[] = [

    {nameCategory : "Apparel and accessories",

  },
    {nameCategory : "Consumer electronics",

  },
    {nameCategory : "Books, movies and music ",

  },
    {nameCategory : "Clothing and Shoes",

  },
    {nameCategory : "Personal care and beauty",
 
  },
    {nameCategory : "Furniture and decor",
  }

  ];
}
