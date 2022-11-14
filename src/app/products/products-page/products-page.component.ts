import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  productsList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  handleProductSelected(product: Product) {
    console.log(product);
  }
  getProducts(): void {
    this.productsList = this.productService.getProducts();
  }
}
