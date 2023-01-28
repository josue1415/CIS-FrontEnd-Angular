import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PagesPageComponent } from './pages/pages-page/pages-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PagesPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
