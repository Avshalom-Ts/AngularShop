import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() price: number = 0;
  @Input() imageSrc: string = '';
  @Output() addProduct = new EventEmitter<MouseEvent>();
  @Output() removeProduct = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {}
}
