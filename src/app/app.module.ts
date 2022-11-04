import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { ProductComponent } from './product-page/product/product.component';
import { ShortDescPipe } from './short-desc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HeroImageComponent,
    HomeComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductComponent,
    ShortDescPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
