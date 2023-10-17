import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
cards : Cart[] = [
  {cardNumber :203626612,
    cardHolderName : "amed amine",
    experationMonth : "june",
    experationYear :2020 ,
    cvv: 1213,},
  {cardNumber :203626612,
    cardHolderName : "amed amine",
    experationMonth : "june",
    experationYear :2020 ,
    cvv: 1213,},
  {cardNumber :203626612,
    cardHolderName : "amed amine",
    experationMonth : "june",
    experationYear :2020 ,
    cvv: 1213,}
]
}
