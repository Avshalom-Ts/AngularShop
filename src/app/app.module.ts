import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { HeroImageComponent } from './home/hero-image/hero-image.component';
import { HomeComponent } from './home/home.component';
import { ShortDescPipe } from './pipes/short-desc.pipe';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsRoutingModule } from './products/products-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    NavBarComponent,
    HeroImageComponent,
    HomeComponent,
    ShortDescPipe,
    ContactComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ProductsRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
