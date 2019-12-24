import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeAreaComponent } from './home/home-area/home-area.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { FeatureAreaComponent } from './home/feature-area/feature-area.component';
import { InspiredProductAreaComponent } from './home/inspired-product-area/inspired-product-area.component';
import { NewProductAreaComponent } from './home/new-product-area/new-product-area.component';
import { OfferAreaComponent } from './home/offer-area/offer-area.component';
import { BlogAreaComponent } from './home/blog-area/blog-area.component';
import { FeatureProductAreaComponent } from './home/feature-product-area/feature-product-area.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeAreaComponent,
    ContactComponent,
    ShopComponent,
    FeatureAreaComponent,
    InspiredProductAreaComponent,
    NewProductAreaComponent,
    OfferAreaComponent,
    BlogAreaComponent,
    FeatureProductAreaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
