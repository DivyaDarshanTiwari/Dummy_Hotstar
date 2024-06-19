import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,NavbarComponent
  ]
})
export class HomeModule { }
