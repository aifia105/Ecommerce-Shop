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
    {name : "Books, movies, music, and games",

  },
    {name : "Clothing and Shoes",

  },
    {name : "Health and personal care and beauty",
 
  },
    {name : "Furniture and decor",
  }

  ];
}
