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

  cartProducts: Product[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  handleAddProduct(addProduct: Product) {
    // console.log(event);
    this.cartProducts.push(addProduct);
    console.log(this.cartProducts);
  }
  handleremoveProduct(removeProduct: Product) {
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (removeProduct._id === this.cartProducts[i]._id) {
        this.cartProducts.splice(i, 1);
      }
    }
    console.log(this.cartProducts);
  }
}
