import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footter/footer.component';
import ProductsComponent from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [


    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    NavigationBarComponent,
    OrderParentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
