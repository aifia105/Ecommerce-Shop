import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isSelected: boolean = true;
  swapColors() {
    this.isSelected = !this.isSelected;
  }
}
