import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './ProductPage/product-list/product-list.component';
import { ProductComponent } from './ProductPage/productList/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HeroImageComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
