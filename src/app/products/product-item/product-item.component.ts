import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  productList: Product[] = [];
  prodId: number = NaN;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.prodId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
