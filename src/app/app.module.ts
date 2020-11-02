import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatIconModule,
        SlickCarouselModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
