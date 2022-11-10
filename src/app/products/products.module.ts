import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page/product-page.component';
import { ProductListComponent } from './products-page/product-list/product-list.component';
import { ProductComponent } from './products-page/product/product.component';
import { ShortDescPipe } from '../pipes/short-desc.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
@NgModule({
  declarations: [
    ShortDescPipe,
    ProductsPageComponent,
    ProductListComponent,
    ProductComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
