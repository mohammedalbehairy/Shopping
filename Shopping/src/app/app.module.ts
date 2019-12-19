import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { OfferComponent } from './offer/offer.component';
import { NewProductComponent } from './new-product/new-product.component';
import { InspiredProductComponent } from './inspired-product/inspired-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    ShopComponent,
    FeatureComponent,
    FeatureProductComponent,
    OfferComponent,
    NewProductComponent,
    InspiredProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
