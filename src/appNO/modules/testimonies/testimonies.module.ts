import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniesRoutingModule } from './testimonies-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TestimoniesComponent } from './pages/testimonies/testimonies.component';


@NgModule({
  declarations: [
    TestimoniesComponent
  ],
  imports: [
    CommonModule,
    TestimoniesRoutingModule,
    SharedModule
  ]
})
export class TestimoniesModule { }
