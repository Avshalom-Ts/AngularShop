import { Injectable } from '@angular/core';
import { Product } from './products/Models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalPrice: number = 0;
  constructor() {}

  productsCartList = [
    {
      _id: '63655db821c8aa26f45f652d',
      price: 1536,
      image: 'https://unsplash.com/photos/DtDKhx1atQo',
      title: 'Sky Der',
      description:
        'Cillum nisi tempor proident sunt adipisicing mollit nostrud ea laboris commodo aliquip exercitation esse. Amet proident dolore tempor nisi ipsum esse id. Minim in occaecat ea laborum tempor ea. Aute duis sunt cupidatat incididunt commodo officia ut irure laborum quis.\r\n',
    },
    {
      _id: '63634db821c8aa26f45f652d',
      price: 5413,
      image: 'https://unsplash.com/photos/DtDKhx1atQo',
      title: 'Dr blue',
      description:
        'Cillum nisi tempor proident sunt adipisicing mollit nostrud ea laboris commodo aliquip exercitation esse. Amet proident dolore tempor nisi ipsum esse id. Minim in occaecat ea laborum tempor ea. Aute duis sunt cupidatat incididunt commodo officia ut irure laborum quis.\r\n',
    },
  ];

  getCartList() {
    return this.productsCartList;
  }
  addProduct(product: Product) {
    this.productsCartList.push(product);
  }
}
