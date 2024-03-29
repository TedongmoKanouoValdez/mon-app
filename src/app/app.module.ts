import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StartRatingComponent } from './shared/components/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StartRatingComponent,
    HomeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // les liens pour components
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'hotels/:id', component: HotelDetailComponent},
      {path: 'hotels', component: HotelListComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
