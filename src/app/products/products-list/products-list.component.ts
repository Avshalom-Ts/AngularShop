import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];

  @Output() productSelected = new EventEmitter<Product>();
  @Output() cartProducts: Product[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  handleAddProduct(addProduct: Product) {
    // console.log(event);
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
