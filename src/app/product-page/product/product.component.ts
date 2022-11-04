import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() price: number = 0;
  @Input() imageSrc: string = '';
  constructor() {}

  ngOnInit(): void {}
}
