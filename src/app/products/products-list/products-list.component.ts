import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
}
