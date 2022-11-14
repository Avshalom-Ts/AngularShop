import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/product.model';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];

  @Output() productSelected = new EventEmitter<Product>();
  @Output() cartProducts: Product[] = [];

  constructor(private cartProductList: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartProductList.getCartList();
    console.log(this.cartProductList);
  }

  handleAddProduct(addProduct: Product) {
    // console.log(event);
    this.cartProductList.addProduct(addProduct);
    this.cartProducts.push(addProduct);
    console.log(this.cartProducts);
  }

  handleremoveProduct(removeProduct: Product) {
    console.log(this.cartProducts);
    this.cartProducts = this.cartProducts.filter(
      (p) => p._id !== removeProduct._id
    );
    // for (let i = 0; i < this.cartProducts.length; i++) {
    //   if (removeProduct._id === this.cartProducts[i]._id) {
    //   }
    console.log(this.cartProducts);
  }
}
