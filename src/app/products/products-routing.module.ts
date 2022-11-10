import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    children: [
      {
        path: 'product/:id',
        component: ProductItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
