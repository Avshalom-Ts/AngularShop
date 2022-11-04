import { Component, OnInit, Input } from '@angular/core';

interface Product {
  _id: string;
  price: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
