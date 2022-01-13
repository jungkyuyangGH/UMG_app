import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import { MerchDetailComponent } from './merch-detail/merch-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MusicComponent } from './music/music.component';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/" },
  { path: "home", component: HomeComponent },
  { path: "merch", component: MerchComponent },
  { path: "*", component: PageNotFoundComponent },
  /*
  { path: "merch", 
    component: MerchComponent, 
    children: [
      { path: 'merch-detail', component: MerchDetailComponent },
    ]
  },
  */
  { path: "music", component: MusicComponent },
  { path: "tour", component: TourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
