import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HomeComponent } from './screens/dashboard/screens/home/home.component';


const routes: Routes = [ {path : '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent,
                        children: [
                          { path: '', component: HomeComponent }
                          ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
