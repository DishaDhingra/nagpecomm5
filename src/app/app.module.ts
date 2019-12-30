import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HeaderBarComponent,
    CategoryComponent,
    MainPageComponent,
    ProductDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'category', component: CategoryComponent },
      { path: 'productdetail/:id', component: ProductDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'mainpage', component: MainPageComponent },
      { path: '', redirectTo: 'mainpage', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
