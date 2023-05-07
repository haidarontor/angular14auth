import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './user-auth/login/login.component';
import {SignupComponent} from './user-auth/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import {AboutComponent} from './home/about/about.component';
import {NoPageComponent} from './home/no-page/no-page.component';
import {AboutCompanyComponent} from './home/about-company/about-company.component';
import {AboutMeComponent} from './home/about-me/about-me.component';
 
const routes:Routes=[
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'signup',
    component:SignupComponent

  },
  
  {
    // dynamic route id get
    // path:'about/:id',
    path:'about',
    component:AboutComponent,
    children:[
      {path:'company',component:AboutCompanyComponent},
      {path:'me',component:AboutMeComponent}
    ]
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:NoPageComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
