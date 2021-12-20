import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoComponent } from './layout/logo/logo.component';
import { SearchComponent } from './layout/icons/search/search.component';
import { MenuComponent } from './layout/icons/menu/menu.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { PlusComponent } from './layout/icons/plus/plus.component';
import { AddComponent } from './components/add/add.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HomeComponent } from './layout/icons/home/home.component';
import { FavouriteComponent } from './layout/icons/favourite/favourite.component';
import { CartComponent } from './layout/icons/cart/cart.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    OrderComponent,
    CardComponent,
    ButtonComponent,
    PlusComponent,
    AddComponent,
    ToolsComponent,
    HomeComponent,
    FavouriteComponent,
    CartComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
