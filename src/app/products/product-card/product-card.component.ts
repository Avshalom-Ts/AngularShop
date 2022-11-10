import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
