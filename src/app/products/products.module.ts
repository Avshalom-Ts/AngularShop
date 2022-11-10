import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShortDescPipe } from '../pipes/short-desc.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductItemComponent } from './product-item/product-item.component';
@NgModule({
  declarations: [
    ShortDescPipe,
    ProductsPageComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
