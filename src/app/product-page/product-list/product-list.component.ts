import { Component, OnInit, Input } from '@angular/core';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() productsList: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
