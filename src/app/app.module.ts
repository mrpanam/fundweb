import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationControlsComponent } from 'ngx-pagination';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorComponent } from './app-error/app-error.component';
import { HttpInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewproductComponent,
    EditproductComponent,
    NavbarComponent,
    AppErrorComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule, NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
