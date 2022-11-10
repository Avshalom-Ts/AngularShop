import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
}
