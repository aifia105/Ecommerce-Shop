import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private route: Router){}

  search(productName: string){
    this.route.navigate(['/search', productName]);
  }

}
