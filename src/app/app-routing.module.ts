import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
