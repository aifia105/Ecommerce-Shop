import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  categories = [
    {name : "Apparel and accessories",

  },
    {name : "Consumer electronics",

  },
    {name : "Books, movies and music ",

  },
    {name : "Clothing and Shoes",

  },
    {name : "Personal care and beauty",
 
  },
    {name : "Furniture and decor",
  }

  ];
}
