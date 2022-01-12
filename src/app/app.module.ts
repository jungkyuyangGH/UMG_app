import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { MerchComponent } from './merch/merch.component';
import { MerchDetailComponent } from './merch-detail/merch-detail.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourComponent,
    MerchComponent,
    MerchDetailComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
