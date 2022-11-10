import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products-page/product-list/product-list.component';
import { ProductsPageComponent } from './products-page/product-page.component';
import { ProductComponent } from './products-page/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    children: [
      {
        path: 'product/:id',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
