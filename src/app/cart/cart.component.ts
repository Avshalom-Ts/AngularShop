import { Component, OnInit } from '@angular/core';
import { Product } from '../products/Models/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartList();
    this.countTotalPrice();
  }

  countTotalPrice() {
    for (let i = 0; i < this.cartService.getCartList().length; i++) {
      this.totalPrice += this.cartService.getCartList()[i].price;
    }
  }
}
