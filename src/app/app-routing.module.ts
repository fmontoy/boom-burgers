import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HomeComponent } from './screens/dashboard/screens/home/home.component';
import { LoginComponent } from './screens/dashboard/screens/login/login.component';
import { MenuComponent } from './screens/dashboard/screens/menu/menu.component';
import { AuthGuard } from './guards/auth.guard';
import { BuyComponent } from './screens/dashboard/screens/buy/buy.component';


const routes: Routes = [ {path : '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent,
                        children: [
                          { path: '', component: HomeComponent },
                          { path: 'login', component: LoginComponent },
                          { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
                          { path: 'buy', component: BuyComponent, canActivate: [AuthGuard] }
                        ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
