import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { RouterModule } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';





@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    NoPageComponent
  ]

})
export class HomeModule { }
