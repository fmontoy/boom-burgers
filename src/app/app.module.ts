import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NavbarComponent } from './screens/dashboard/components/navbar/navbar.component';
import { FooterComponent } from './screens/dashboard/components/footer/footer.component';
import { HomeComponent } from './screens/dashboard/screens/home/home.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './screens/dashboard/screens/login/login.component';
import { MenuComponent } from './screens/dashboard/screens/menu/menu.component';
import { BuyComponent } from './screens/dashboard/screens/buy/buy.component';
import { BurgerCardComponent } from './components/burger-card/burger-card.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    LoginComponent,
    MenuComponent,
    BuyComponent,
    BurgerCardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
