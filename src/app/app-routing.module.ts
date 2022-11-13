import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./products/products.module').then((m) => m.ProductsModule),
  // },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'item/:id',
    component: ProductItemComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    // loadComponent: () =>
    //   import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
