import { HomeAreaComponent } from './home-area/home-area.component';
import { HomeComponent } from './home.component';
import { FeatureProductAreaComponent } from './feature-product-area/feature-product-area.component';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { OfferAreaComponent } from './offer-area/offer-area.component';
import { NewProductAreaComponent } from './new-product-area/new-product-area.component';
import { InspiredProductAreaComponent } from './inspired-product-area/inspired-product-area.component';
import { FeatureAreaComponent } from './feature-area/feature-area.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    FeatureAreaComponent,
    InspiredProductAreaComponent,
    NewProductAreaComponent,
    OfferAreaComponent,
    BlogAreaComponent,
    FeatureProductAreaComponent,
    HomeAreaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
