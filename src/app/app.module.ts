import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NavbarComponent } from './screens/dashboard/components/navbar/navbar.component';
import { FooterComponent } from './screens/dashboard/components/footer/footer.component';
import { HomeComponent } from './screens/dashboard/screens/home/home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
