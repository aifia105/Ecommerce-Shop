import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  private subcription$ = new Subscription();
  category: Category[] = [];
  constructor(private categoryService: CategoryService){}
  ngOnInit(): void {
    this.categoryService.getAllCategorys().pipe().subscribe((data) => {
      this.category = data;
    });
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
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
