import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NavbarComponent } from './screens/dashboard/components/navbar/navbar.component';
import { FooterComponent } from './screens/dashboard/components/footer/footer.component';
import { HomeComponent } from './screens/dashboard/screens/home/home.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './screens/dashboard/screens/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
